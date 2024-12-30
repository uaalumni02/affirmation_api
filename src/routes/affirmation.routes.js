import express from "express";
import checkAuth from "../middleware/check-auth";

import affirmationController from "../controllers/affirmation";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, affirmationController.addAffirmation)
  .get(checkAuth, affirmationController.allAffirmations);

router
  .route("/:id")
  .delete(checkAuth, affirmationController.deleteAffirmation)
  .get(checkAuth, affirmationController.getAffirmationById)
  .patch(checkAuth, affirmationController.editAffirmation);

export default router;
