const io = require('socket.io')(http, {
  cors: {
    origin: "http://127.0.0.1:3000"
  }
});
