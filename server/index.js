const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Initialize express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Instantiate server via Socket.IO
const io = new Server(server);

// Connect with client
io.on("connection", (socket) => {
  console.log("Connected with client.");

  // Disconnect
  socket.on("disconnect", () => {
    console.log("Disconnected with client.");
  });
});

const PORT = 5000;

// Start server
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
