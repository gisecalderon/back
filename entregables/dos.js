import fs from 'fs';

export default class UserManager{
    constructor(){
        this.path='./entregables/usuarios.json';
    }
    getUser=async()=>{
        if(fs.existsSync(this.path)){
            const data= await fs.promises.readFile(this.path, 'utf-8');
            const users = JSON.parse(data);
            return users;
        }else{
            return[];
        
        }
    }
    createUser = async(user) =>{
        const users = await this.getUsers();
        console.log(users);

    }
}
