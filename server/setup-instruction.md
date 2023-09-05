# Setup Server

Create _**/server**_ folder</br>
While inside _**/server**_ folder...

1. Run `npm init -y` to create and initialize _**package.json**_ file.

2. Change _scripts_ value inside _**package.json**_ as following:

   ```json
   "scripts": {
       "start": "nodemon index"
     },
   ```

3. Install all required packages:

   - [**Nodemon**](https://www.npmjs.com/package/nodemon)</br>
     `npm install nodemon` OR `npm install -g nodemon`
   - [**Express**](https://www.npmjs.com/package/express): Web framework for Node.js</br>
     `npm install express`
   - [**Socket.IO**](https://www.npmjs.com/package/socket.io): Real-time bidirectional event-based communication</br>
     `npm install socket.io`

4. Setup base server application by creating _**index.js**_ file:

   ```js
   const express = require("express");
   const http = require("http");

   // Initialize express app
   const app = express();

   // Create HTTP server
   const server = http.createServer(app);

   const PORT = 5000;

   // Start server
   server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
   ```

5. Start your server: `npm start`

6. Open http://localhost:{#PORT} on browser to check server running.