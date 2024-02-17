import express from "express";
import router from "./routes.js/index.js"
 

const app = express();
const PORT = process.env.PORT || 8000;

// app.use("/", (req, res, next) => {
//     if(req?.query?.apikey === "123"){
//      console.log("agai Req")
//      next() 
//     }
//     res.status(401).send({message : "Not Alloud"})
// })

app.use(express.json())
app.use('/api', router);

// app.post('/order',(req, res)=>{
//     console.log("Order Details",req.body)
//     res.send({message : "Ordere Place"})
//  })

app.listen(PORT, ()=>{
    console.log(`Connect ${PORT}`)
})