const mongoose = require('mongoose')


mongoose.connect(
    'mongodb://localhost:27017/grelper_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (e)=>{
        if(!e) console.log("MongoDB connected");
        else console.log("Connection to MongoDB failed, error:"+e);
    }
)