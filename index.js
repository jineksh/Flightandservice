
const express = require('express');
const {PORT} = require('./config/server.js')
require('dotenv').config();
const setup = async()=>{
    const app = express();
    

    app.listen(PORT,()=>{
        console.log("server started on PORT 3000");
        console.log(process.env.PORT);
    })
}

setup();