//  import express
const express = require('express');

// Create an Express Application
const app = express();

// Define the root route
app.get('/', (request, response)=>{
    response.json({message: 'Hello World'});
});

// export the app
module.exports = app;