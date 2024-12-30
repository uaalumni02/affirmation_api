import express from "express";
import checkAuth from "../middleware/check-auth";

import affirmationController from "../controllers/affirmation";

const router = express.Router();

router.route("/:category").get(checkAuth, affirmationController.getRandomAffirmation);

export default router;