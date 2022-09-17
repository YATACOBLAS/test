const express = require('express');
const mysql=require('mysql');
const myconnection=require('express-myconnection');
const app= express();


app.listen(process.env.PORT || 3000, ()=>{
    console.log('listening on port 7000')
})


