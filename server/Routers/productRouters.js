import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";
import requireAuthMiddleware from "../Middleware/RequireAuthMiddleware.js";
import roleMiddleware from "../Middleware/RoleMiddleware.js";
import imagesUpload from "../cloudinary.config.js";

const productRouters = Router();

productRouters.get("/",ProductController.getProducts);
productRouters.get("/:id", ProductController.getProduct);
productRouters.post("/",[requireAuthMiddleware,roleMiddleware(["ADMIN"]), imagesUpload.array("images")], ProductController.addProduct);
productRouters.put("/", [requireAuthMiddleware,roleMiddleware(["ADMIN"]),imagesUpload.array("images")], ProductController.updateProduct);
productRouters.delete("/:id", [requireAuthMiddleware,roleMiddleware(["ADMIN"])], ProductController.removeProduct);

export default productRouters;