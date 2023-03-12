import express from "express";
import { 
    login,
    me
 } from "../controllers/login.controller.js";

const router = express.Router();

router.post('/login', login);
router.get('/login', me);

export default router;