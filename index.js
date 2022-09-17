const express = require('express');
const mysql=require('mysql');
const myconnection=require('express-myconnection');
const app= express();


app.listen(process.env.PORT || 3000, ()=>{
    console.log('listening on port 7000')
})

app.use(myconnection(mysql,{
    host:'mysql_server',
    user:'blas',
    database:'db_test',
    password:'secret',
    port:'3306'
}))


app.get('/', (req, res) => {
    res.send('Hola desde Node + NGINX + MYSQL !')
  })

app.get('/insertar',(req,res)=>{
    req.getConnection((err,conn)=>{
        const number = Math.round(Math.random()*100)
        conn.query(`INSERT INTO productos values('${number}_producto')`,(err,result)=>{
            if(err)
                res.status(400).json(err)
            else 
                res.send('Insertado con exito');
            }) 
        })
})

app.get('/obtener',(req,res)=>{
    req.getConnection((err,conn)=>{
        const number = Math.round(Math.random()*100)
        conn.query(`select * from productos`,(err,result)=>{
            if(err)
                res.status(400).json(err)
            else 
                res.send(result)
            }) 
        })
})

