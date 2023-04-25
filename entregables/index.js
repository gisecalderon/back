import UserManager from "./dos";

const userManager = new UserManager();

const context = async()=>{
    const test = await userManager.getUsers();
    console.log(test);
    let testUser={
        first_name: "Jazmin",
        last_name: "Calderón",
        age:17,
    }
    await userManager.createUser(testUser);
    const newUsers = await userManager.getUsers();
    console.log(newUsers);
}

context();


