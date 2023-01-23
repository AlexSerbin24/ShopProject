import { Router } from "express";
import OrderController from "../Controllers/OrderController.js";
import requireAuthMiddleware from "../Middleware/RequireAuthMiddleware.js";
import roleMiddleware from "../Middleware/RoleMiddleware.js";
const orderRouters = Router();

orderRouters.post("/",requireAuthMiddleware,  OrderController.addOrders);
orderRouters.get("/user/:userId", requireAuthMiddleware, OrderController.getUserOrders)
orderRouters.get("/", requireAuthMiddleware, OrderController.getOrders);
orderRouters.put("/:orderId", requireAuthMiddleware, OrderController.changeOrderStatus);

export default orderRouters;