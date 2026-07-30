import express from "express";

import {addProject, deleteProject, findAllProjects, findProject} from "../controllers/projectController.js"

const router  = express.Router();

router.post("/", addProject);
router.get("/", findAllProjects);
router.get("/:id", findProject);
router.delete("/:id", deleteProject)


export default router;