import express from "express";

import {addUser, findUsers, findUserById} from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);
router.get("/", findUsers);
router.get("/:id", findUserById);

export default router;