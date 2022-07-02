const [, , ...args] = process.argv;
const sendBeep = () => { process.stdout.write('\u0007'); };

const playBeeps = (args) => {
  // sanitize inputs, clamp max interval time
  const intervals = args.filter(Number).map((a) => Math.min(a + "000", 20000)); // clamp to 20 secs

  for (const time of intervals)
    setTimeout(sendBeep, time);
};

playBeeps(args);