import fs from 'fs';

const context = async() =>{
    try{
        await fs.promises.writeFile('./package.json', 'Hola promesa');
        const content = await fs.promises.readFile ('./package.json', 'utf-8');
        console.log(content);
        await fs.promises.writeFile('./package.json', 'Hola promesa');
        await fs.promises.appendFile('./package.json', 'Nuevo ingreso');
        const newContent= await fs.promises.readFile('./package.json','utf-8');
        console.log(newContent);
        await fs.promises.unlink('./package.json');
    } catch (error){
        console.log(error);
    }
}
context();