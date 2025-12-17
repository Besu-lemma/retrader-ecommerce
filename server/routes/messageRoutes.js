import express from "express";
import messageController from "../controllers/messageController";
const router=express.Router()

router.get("/", messageController.getMessages)
router.post("/", messageController.sendMessage)

export default router;