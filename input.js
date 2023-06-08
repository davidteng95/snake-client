const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  

  stdin.on("data", key => {
    handleUserInput(key);
  });
  
  return stdin;

};

const handleUserInput = function(key) {
  const stdout = process.stdout;
  if (data === '\u0003') {
    stdout.write("Exited the game.");
    process.exit();
  }
};

module.exports = {
  setupInput
};