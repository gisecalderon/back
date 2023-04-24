import UserManager from "./dos";

const userManager = new UserManager();

const context = async()=>{
    const test = await userManager.getUsers();
    console.log(test);
}

context();


