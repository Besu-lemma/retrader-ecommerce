import express from "express";
import dotenv from "dotenv";
import connectDB from "../server/config/db.js";
import productRoutes from "../server/routes/productRoutes.js"
import userRoutes from "../server/routes/userRoutes.js";
import messageRoutes from "../server/routes/messageRoutes.js"
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(errorHandler)
app.use("/api/product", productRoutes)
app.use("/api/user", userRoutes )
app.use("/api/message", messageRoutes)
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running ooon port ${PORT}`);
});
