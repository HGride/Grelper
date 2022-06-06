let express = require('express')
const { path } = require('express/lib/application')
let app = express()
require('./DB/db.gest.js')

// Models
const Message = require('./models/message')
const User = require('./models/user')

// Middlewear
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.writeHead(200, "Response succed")
    res.end()
})

app.post('/', (req, res)=> {
    /*Message.create(req.body.message, req.body.name, req.body.email)*/
    if(req.body != {}){
        switch(req.body.form){
            case "contact":
                if(!((req.body.message === "" || req.body.message == undefined) || (req.body.name === "" || req.body.name == undefined) || (req.body.email === "" || req.body.email == undefined))){
                    Message.create(req.body.message, req.body.name, req.body.email);
                }else{
                    res.writeHead(500,"Error in form")
                }
                break;
            case "logger_reg":

            default:
                break;
        }
    }
    res.redirect('/')
})

const APP_PORT = 5000;
app.listen(APP_PORT, ()=> {
    console.log(`Server stared at port ${APP_PORT}`);
})