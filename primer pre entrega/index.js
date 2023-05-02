import UserManager from "./Managers/userManager.js"
import moment from "moment";
const userManager = new UserManager();

const context = async() =>{
    const testUser ={
        name : "Francisco",
        last_name:"Sanchez",
        password:"asdf"
    }
    await userManager.createUser(testUser);

    await userManager.validatePassword({

        name : "Francisco",

        },"asdf")

}
const today=moment();
console.log(today);

context();