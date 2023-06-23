import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app=express();

//import api routers
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subcategoryRouter from './routes/subcategory.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// to resolve cross origin problem
app.use(cors());
app.use(fileUpload());
//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
