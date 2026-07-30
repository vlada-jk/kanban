import express from "express";

import { addTask, findTasks, updateTaskStatus, deleteTask, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", addTask);
router.get("/:projectId", findTasks);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;