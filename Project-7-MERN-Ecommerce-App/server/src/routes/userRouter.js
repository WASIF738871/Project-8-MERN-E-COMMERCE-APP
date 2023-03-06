import express from "express";

import {register} from "../controllers/userController.js";

const router = express.Router();

//registeration api
router.post('/users/api1/register', register);

export default router;