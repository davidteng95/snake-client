// establishes a connection with the game server
const net = require("net");

const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP, //"165.227.47.243",// IP address here,
    port: PORT //50541// PORT number here,
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: DAV");
    //conn.write("Move: up");
    //let delay = 50;
    //setInterval(() => {
      //conn.write("Move: down");
       //delay += 50;
    //}, delay);
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect
};

