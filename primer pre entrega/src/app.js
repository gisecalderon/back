import express, { request, response } from 'express';
const app = express();

app.get('/ruta',(request,response)=>{
    response.send('Funcionó express');
    response.redirect('')
})

app.get('/bienvenida',(request,response)=>{
    response.send(<h2>'Bienvenido'</h2>)
})

app.get('/user',(request,response)=>{
    const user={
        first_name:"Claudio",
        last_name:'Rodriguez',
        age:32
    }
    response.send(user);
})

app.listen(8080,()=>console.log('listening on PORT 8080'))