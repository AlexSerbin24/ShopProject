import { Router } from "express";
import UserController from "../Controllers/UserController.js"

const userRouters = Router();

userRouters.post("/login", UserController.login);
userRouters.post("/register", UserController.registration);
userRouters.post("/logout", UserController.logout);
userRouters.get("/refresh", UserController.refresh); 
export default userRouters;