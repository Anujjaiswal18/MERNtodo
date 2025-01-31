import express from "express";
import { addtask, data, deletetask, edittask, login, logout, signup } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login); 
router.post("/logout", logout); 
router.post("/addtask",protectRoute, addtask); 
router.post("/edittask",protectRoute, edittask); 
router.get("/data",protectRoute, data)
router.post("/deletetask",protectRoute, deletetask)

export default router;