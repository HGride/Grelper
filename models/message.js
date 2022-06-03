const res = require('express/lib/response');
const { messageModel } = require('./message.model')

class Message {
    static create(message, user_name, user_email) {
        try{
            const newRecord = new messageModel
            ({
                user_name: user_name,
                user_email: user_email,
                content: message
            });

            newRecord.save((e, data) => {
                if(!e) res.send(data);
                else console.log(`Error while creating ${data}: ${e}`);
            })
        }catch(e){
            throw e
        }
    }
}