import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
const app=express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome everyone')

})


mongoose
  .connect(mongoDBURL)
  .then(()=>{
    console.log('app connected to database')
  })
   .catch(()=>{
    console.log(error)
   })

   app.listen(PORT,()=>{
    console.log(`app is listening to port :${PORT}`);
})
963.*