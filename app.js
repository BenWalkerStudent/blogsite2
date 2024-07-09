require('dotenv').config();

const expressLayouts = require("express-ejs-layouts")
const express = require('express')
const app = express();
const PORT = 4000;

const connectDB = require("./server/config/db")
connectDB();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'));

app.use(expressLayouts)
app.use(express.static("public"))
app.set("layout", "./layouts/main.ejs")
app.set("view engine", "ejs")

app.use("/", require("./server/routes/main"))

app.get('/',(req,res)=>{

    res.render('main')
    
});


app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`))