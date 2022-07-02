const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});
rl.input.setEncoding('utf8');

const sendBeep = () => { process.stdout.write('\x07'); };
const handleInput = (key) => {
  // exit on ctrl + c
  if (key === '\u0003') console.log() || process.exit();

  rl.output.write('\n' + rl.getPrompt());
  if (key === 'b') sendBeep();
  if (key !== ' ' && !Number.isNaN(Number(key))) setTimeout(sendBeep, key + '000');
};

const playBeeps = () => {
  rl.prompt();
  rl.input.on('data', handleInput);
};

playBeeps();
