import express from "express";
import checkAuth from "../middleware/check-auth";

import categoryController from "../controllers/category";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, categoryController.addCategory)
  .get(checkAuth, categoryController.allCategories);

router.route("/:id").get(checkAuth, categoryController.getCategoryById);

export default router;
