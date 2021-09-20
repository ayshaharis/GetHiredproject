const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
//to store database connectivity link
const dotenv=require('dotenv');
dotenv.config();
//connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,useUnifiedTopology: true },()=>console.log("connected to db"));
//import routes
const servicesRoutes=require('./routes/services');
const signupRoutes=require('./routes/signupRoutes');
const userRoutes=require("./routes/user");
const listingRoutes=require("./routes/listing");

//middewares
app.use(express.json());
app.use(cors());

//Route middlewares

app.use('/api/services',servicesRoutes);
app.use('/api/signup',signupRoutes);
app.use("/api/user",userRoutes);
app.use("/api/listing",listingRoutes);







app.listen(3000,()=>console.log("server up and running on port 3000!"));
module.exports=app;
