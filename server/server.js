const express= require('express');
const cors=require('cors')
const dotenv=  require('dotenv')
const db=require('./db')
const routes= require('./routes');


const app= express();


dotenv.config({path:'./.env'})

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(routes);

app.listen(process.env.PORT,()=>{
    console.log("App is running...")
    console.log(`http://localhost:${process.env.PORT}/`)
})