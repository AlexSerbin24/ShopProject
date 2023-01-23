import express from "express";
import cors from "cors"
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import productRouters from "./Routers/productRouters.js";
import userRouters from "./Routers/userRouters.js";
import orderRouters from "./Routers/orderRouters.js";
import commentRouters from "./Routers/commentRouters.js";
import cookieParser from "cookie-parser";
import ApiErrorsMiddleware from "./Middleware/ApiErrorsMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json({limit:"100mb"}));
app.use(cookieParser());
app.use("/products", productRouters);
app.use("/auth", userRouters);
app.use("/orders", orderRouters);
app.use("/comments", commentRouters);
app.use(ApiErrorsMiddleware);

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`app started on app ${PORT}`));
    } catch (error) {
        console.log(error.message)
    }
}
startApp();