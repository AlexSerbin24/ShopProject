import { Router } from "express";
import CommentController from "../Controllers/CommentController.js";
import requireAuthMiddleware from "../Middleware/RequireAuthMiddleware.js";

const commentRouters = Router();

commentRouters.post("/", requireAuthMiddleware, CommentController.addComment);

export default commentRouters;