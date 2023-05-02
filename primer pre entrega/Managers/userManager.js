import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    constructor (){
        this.path= './files/Users.json';
    }
//traer usuario
    getUsers = async() =>{
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const users = JSON.parse(data);
            return users;
        }else return[]
    }
    //crear usuario con contraseña oculta
    createUser = async(user) =>{
        const users = await this.getUsers();
        user.salt = crypto.ramdomaBytes(128).toString('base64');
        user.password = crypto.createHmac('sha256', user.salt).update(user.passwoord).digest('hex');
        users.push(user);
        await fs.promises.writeFile(this.path, JSON.stringify(users,null,'\t'));
    }
    // validar contraseña
    validatePassword = async(user, password)=>{
        const users = await this.getUsers();
        const userIndex= user.findIndex(u=>u.name===user.name);
        if(userIndex=== -1){
        console.log("User doesn't exist")
        }
        const fileUser = users[userIndex];
        const newCompareHash = crypto.createHmac('sha256',fileUser.salt).update(password).digest('hex');
        if(newCompareHash=== fileUser,password){
            console.log("logueado");
        
        }else console.log("contraseña incorrecta");
}
}