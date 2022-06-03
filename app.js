let express = require('express')
const { path } = require('express/lib/application')
let app = express()
require('./DB/db.gest.js')

// Models
const Message = require('./models/message')

// Middlewear
app.use(express.static("public"));

/*app.get('/', (req, res, next)=>{
    res.writeHead(200, "Response succed")
    res.sendFile(__dirname + "/" + "index.html")
})*/

app.post('/#CONTACT', (req, res, next)=> {
    if(req.body.message === undefined || req.body.message === "") {
        console.log("Post error at /#CONTACT: message vide");
    }else{
        Message.create(req.body.message, ()=>{
            console.log("Post succes at /#CONTACT");
        })
    }
    res.redirect('/')
})

app.listen(5500, ()=> {
    console.log("Server started at port 5500");
})