//get  modules in project
const express=require('express');
var hbs = require('hbs') 
let app= express();
const requests=require('requests');
const path=require('path');

//variables


let port= process.env.PORT || 8000;

//paths

let indexHtmlPath= path.join(__dirname,"../public");
let templateViewsPath =path.join(__dirname,"../templates/views")
let templatePartialPath =path.join(__dirname,"../templates/partials")


//routing 

app.use(express.static(indexHtmlPath));
app.set('view engine', 'hbs');
app.set('views', templateViewsPath);

hbs.registerPartials(templatePartialPath);

app.get('/index',(req,res)=>{
    res.render('index');
})

app.get('/aboutus',(req,res)=>{
    res.render('aboutus');
})

app.get('/weather',(req,res)=>{
    res.render("weather");
})

app.get('/index/*',(req,res)=>{
    res.render('errorpage');
})

app.get('/aboutus/*',(req,res)=>{
    res.render('errorpage');
})

app.get('/weather/*',(req,res)=>{
    res.render("errorpage");
})

app.get('*',(req,res)=>{
    res.render("errorpage");
})


//listen
// https://get-abhiweather.herokuapp.com/
app.listen(port , (error)=>{
    console.log('Listening to port 8000')
})