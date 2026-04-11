import express from 'express';
import sum from './sum.js';

const app = express();

const port = 8080;
app.get("/", async(req, res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
app.get("/sum/:a/:b",async(req,res)=>{
   const {a,b} = req.params; 
   
   res.json({
    ans:sum(parseInt(a),parseInt(b))
   })
})