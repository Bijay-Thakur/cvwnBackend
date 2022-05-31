const express = require('express');
const dotenv = require('dotenv');
const {conn,db} = require('./utils/db');
const { urlencoded } = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const path = require('path');


//importing routes 
const authRoutes = require('./routes/authRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const projectRoutes = require('./routes/projectRoutes');
const eventRoutes = require('./routes/eventRoutes');
const coverRoutes = require('./routes/coverRoutes');
const articleRoutes =require('./routes/articleRoutes');
const caseStudyReportRoutes =require('./routes/caseStudyReportRoutes');
const annualReportRoutes =require('./routes/annualReportRoutes');


 



//set dotenv path
dotenv.config({path:'./utils/.env'})

//initialize app
const app = express();

//connect database
conn();


//middlewares
app.use(urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
//enable cors
app.use(cors());

// //set static folder
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 




//setting up routes        
app.use('/auth', authRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);
app.use('/event', eventRoutes);
app.use('/cover', coverRoutes);
app.use('./article',articleRoutes);
app.use('./caseStudyReport',caseStudyReportRoutes);
app.use('./annualReport',annualReportRoutes);
// app.use('/ourTeam', ourTeamRoutes);




app.set("port", process.env.PORT || 5000)








//listen app
app.listen(5000,()=>{
    console.log('App is listening in port 5000')
})