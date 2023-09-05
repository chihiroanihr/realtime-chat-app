const express = require("express");
const http = require("http");

// Initialize express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

const PORT = 5000;

// Start server
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
