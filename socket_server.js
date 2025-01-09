const express = require('express');
const cors = require('cors');
const app = express();

// 1. Allow cross-origin requests from http://127.0.0.1:5500
app.use(cors({
  origin: 'http://127.0.0.1:5500',  // or 'http://localhost:5500' if that's what you use
  methods: ['GET', 'POST'],
  credentials: true,
}));

const http = require('http').Server(app);

// 2. Set up Socket.io with CORS settings
const io = require('socket.io')(http, {
  cors: {
    origin: "http://127.0.0.1:5500", // must match above
    methods: ["GET", "POST"],
    credentials: true
  }
});

// 3. Listen for client connections
io.on('connection', (socket) => {
  console.log('A user connected');
});

// 4. Start listening on port 3000
http.listen(3000, () => {
  console.log('Server running on port 3000');
});
