const [, , ...args] = process.argv;
const sendBeep = () => { process.stdout.write('\x07'); };

const playBeeps = (args) => {
  // sanitize inputs, clamp max interval time
  const intervals = args.filter(Number).map((a) => Math.min(a + "000", 10000)); // max 10 seconds

  for (const time of intervals) {
    setTimeout(sendBeep, time);
  }
};

playBeeps(args);
