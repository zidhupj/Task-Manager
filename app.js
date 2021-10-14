//importing dependencies
const express = require('express');
const app = express();
const connectDb = require('./db/connect');
require('dotenv').config();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

// express routes
app.get('/', (req, res) => {
    res.send('Task Manager app')
})
// task route
app.use('/api/v1/tasks/',tasks)

const port = 3000;

const start = async() => {
    try {
        // connecting to db
        await connectDb(process.env.MONGO_URI);
        // starting node server on port 3000
        app.listen(port, () => {
            console.log(`Server is listeneing on port: ${port}...`)
        });
    } catch (error) {
        console.log(error);
    }
}
start();