const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the first page
app.get('/1', (req, res) => {
  res.sendFile(__dirname + '/public/page1.html');
});

// Route for the second page
app.get('/2', (req, res) => {
  res.sendFile(__dirname + '/public/page2.html');
});

// WebSocket connection handler
io.on('connection', (socket) => {
  // Event listener for changes on page 1
  socket.on('page1Data', (data) => {
    // Broadcast the data to all connected clients on page 2
    io.emit('page2Data', data);
  });
});

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
      description: 'API documentation for the backend done using Swagger ',
    },
  },
  apis: ['app.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
