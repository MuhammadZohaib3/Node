import express from "express";
const router = express.Router();


const users = [{
    name : "Zohaib",
    email : "syedzobi@gmail.com"
},
{
    name : "Zobar",
    email : "syed@gmail.com"
}

]


router.get('/', (req, res) => {
 res.send(users)
})


export default router;