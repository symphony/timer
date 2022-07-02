const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.input.setRawMode(true);
rl.input.setEncoding('utf8');

const sendBeep = () => { process.stdout.write('\x07'); };

const handleInput = (key) => {
  rl.output.write('\n' + rl.getPrompt());
  if (key === '\u0003') process.exit();
  if (key === 'b') sendBeep();
};

/** plays beeps */
const playBeeps = () => {
  rl.prompt();
  rl.input.on('data', handleInput);
};

playBeeps();
