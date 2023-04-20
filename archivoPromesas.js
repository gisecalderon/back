import fs from 'fs';

const context = async() =>{
    try{
        await fs.promises.writeFile('./archivoPromesas.txt', 'Hola promesa');
        const content = await fs.promises.readFile ('./archivoPromesas.txt', 'utf-8');
        console.log(content);
        await fs.promises.appendFile('./archivoPromesa.txt', 'Nuevo ingreso');
        const newContent= await fs.promises.readFile('./archivoPromesa.txt','utf-8');
        console.log(newContent);
    }catch (error){
        console.log(error);
    }
}
context();