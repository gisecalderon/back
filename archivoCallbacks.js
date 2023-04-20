const fs = require('fs');
const productos = [
    {title:"remera",
    price: 5350,
    }
]
fs.writeFile('./productosCallback.json', JSON.stringify(productos),(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("Archivo escrito con exito");
    fs.readFile('./productosCallback.json','utf-8', (error, content)={
        if(error){
            console.log(error);
            return;
        }
        console.log(content);
        fs.appendFile('./productosCallback.json','a', (error)=>{
            if(error){
                console.log(error);
                return;
            }
            fs.readFile('./productosCallback.json', 'utf-8',(error,content)=>{
                if(error){
                    console.log(error);
                    return;
                }
                console.log(content);
            })
        })
    })
})

