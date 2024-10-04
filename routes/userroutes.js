import express, { Router } from "express"
import {create} from "../controllers/usercontroller.js"

const router =express.Router();
router.post("/create",create);
router.get("/getakkuser",fetch);
export default router;
