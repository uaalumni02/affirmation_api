import express from "express";
import checkAuth from "../middleware/check-auth";

import affirmationController from "../controllers/affirmation";

const router = express.Router();

router.route("/:userName").get(checkAuth, affirmationController.getAffirmationByUser);

export default router;
