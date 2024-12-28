import express from "express";
import checkAuth from "../middleware/check-auth";

import affirmationController from "../controllers/affirmation";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, affirmationController.addAffirmation)
  .get(checkAuth, affirmationController.allAffirmations);

router.route("/:id").get(checkAuth, affirmationController.getAffirmationById);

export default router;
