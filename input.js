let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = stdin.on("data", key => {
    const stdout = process.stdout;
    if (key === '\u0003') {
      stdout.write("Exited the game.\n");
      process.exit();
    }
  
    if (key === 'w') {
      conn.write('Move: up');
    }
  
    if (key === 's') {
      conn.write('Move: down');
    }
  
    if (key === 'a') {
      conn.write('Move: left');
    }
  
    if (key === 'd') {
      conn.write('Move: right');
    }

    if (key === 'q') {
      conn.write('Say: hi');
    }

    if (key === 'e') {
      conn.write('Say: bye');
    }
  });
  
  return stdin;

};

module.exports = {
  setupInput
};

