const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const videoRoutes = require('./api/routes/videos');
const playlistRoutes = require('./api/routes/playlist');
const userRoutes = require('./api/routes/user');


mongoose.connect("mongodb://admin:"
+ process.env.Password+
"@firs-db-shard-00-00-by3cl.mongodb.net:27017,firs-db-shard-00-01-by3cl.mongodb.net:27017,firs-db-shard-00-02-by3cl.mongodb.net:27017/test?ssl=true&replicaSet=firs-db-shard-0&authSource=admin");

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/videos', videoRoutes);
app.use('/playlist', playlistRoutes);
app.use('/user', userRoutes);

app.use((req, res, next)=>{
    const error = new Error('not found');
    error.status =404 ;
    next(error);
});
app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});




module.exports= app;
