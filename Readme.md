# Real-Time Web Application

This is a real-time web application built with Node.js, Express.js, and Socket.io. The application consists of two web pages where data entered in the input fields on the first page is displayed in real-time on the second page.

## Features

- Multiple input text boxes with checkboxes on Page 1.
- Real-time updates on Page 2 when input data changes on Page 1.
- WebSocket communication using Socket.io for real-time data transfer.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install the dependencies:

```bash
cd <project_directory>
npm install


## Usage

1. Start the server:

```bash
npm start
```

2. Open Page 1 in your browser:
```
http://localhost:3000/1
```

3. Open Page 2 in another browser tab or window:

```
http://localhost:3000/2
```

4. Enter text in the input fields on Page 1.
5. On Page 2, you will see the real-time updates reflecting the input data changes made on Page 1.



## API Documentation

API documentation is available using Swagger UI.

```
http://localhost:3000/api-docs
```
