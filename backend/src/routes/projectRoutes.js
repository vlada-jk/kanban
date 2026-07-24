import express from "express";

import {addProject, findAllProjects} from "../controllers/projectController.js"

const router  = express.Router();

router.post("/", addProject);
router.get("/", findAllProjects);


export default router;