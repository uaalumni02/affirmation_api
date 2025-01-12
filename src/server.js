import express from "express";
import "dotenv/config";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import affirmationRoutes from "./routes/affirmation.routes";
import affirmationByUserRoutes from "./routes/affirmationByUser.routes";
import randomAffirmation from "./routes/randomAffirmation.routes";

const corsOptions = {
  origin: 'http://localhost:3001', // Front-end origin
  credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const DB_URL = process.env.MONGO_URL;

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true });
  console.log("Connection Successful");
} catch (err) {
  console.error("Unable to Connect to MongoDB", err);
}

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/affirmation", affirmationRoutes);
router.use("/affirmation_by_user", affirmationByUserRoutes);
router.use("/random_affirmation", randomAffirmation);

app.use("/api", router);

app.listen(port, () => log("server is running"));
export default app;
