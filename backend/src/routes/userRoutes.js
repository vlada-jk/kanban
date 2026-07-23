import express from "express";

import {addUser, findUsers} from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);
router.get("/", findUsers);

export default router;