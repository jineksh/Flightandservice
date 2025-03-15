
const express = require('express');
const {PORT} = require('./config/server.js');
const bodyparser = require('body-parser');
const Cityrepo = require('./repository/city-repo');

require('dotenv').config();
const setup = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log("server started on PORT 3000");
        const repo = new Cityrepo();
        repo.createcity({name:'new delhi'});
    })
}
setup();
