const args = process.argv.slice(2).filter(Number);
const intervals = args.map(a => Math.min(a + "000", 20000)); // clamp to 20 secs max, convert to ms)
const sendBeep = () => process.stdout.write('\x07');
const playBeeps = () => {
  for (const time of intervals)
    setTimeout(() => sendBeep(), time);
};

playBeeps();