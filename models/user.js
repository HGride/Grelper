const { userModel } = require('./user.model');

class User {
    static create(name, fullname, email, password){
        try{
            const newRecord = new userModel(
                {
                    name: name,
                    fullname: fullname,
                    email: email,
                    password: password
                }
            );
            newRecord.save((e, data)=> {
                if(e) console.log(`An error occured while uploading ${data}: ${e}`);
            })
        }catch(e){
            throw e
        }
    }
}

module.exports = User