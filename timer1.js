const args = process.argv.slice(2);
const sendBeep = () => process.stdout.write('\x07');
const playBeeps = (args) => {
  const intervals = args.filter(Number).map(a => Math.min(a + "000", 20000)); // clamp to 20 secs max, convert to ms)
  for (const time of intervals)
    setTimeout(() => sendBeep(), time);
};

playBeeps(args);