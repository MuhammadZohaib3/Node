import express from "express";
import { PRODUCT } from "../constant/index.js";
const router = express.Router();



router.get('/', (req, res) => {
 res.send(PRODUCT)
})


export default router;