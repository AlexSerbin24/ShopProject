
import OrderDto from "../DTO/OrderDto.js";
import OrderService from "../Service/OrderService.js";
class OrderController {
    async addOrders(req, res) {
        try {
            let orders = req.body;
            await OrderService.addOrders(orders)
            return res.sendStatus(200)
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }


    async getOrders(req,res, next){
        try {
            let orderEntities = await OrderService.getOrders();
            let orders = orderEntities.map(orderEntity=>new OrderDto(orderEntity));

            return res.send(orders);
        } catch (error) {
            console.log(error.message)
            next(error);
        }
    }

    async getUserOrders(req, res,next) {
        try {
            let userId = req.params.userId;
            let orderEntitites = await OrderService.getUserOrders(userId);
            let orders = await Promise.all(orderEntitites.map(orderEntity => new OrderDto(orderEntity)));
            return res.send(orders);
        } catch (error) {
            console.log(error.message)
            next(error)
        }
    }


    async changeOrderStatus(req, res, next) {
        try {

            const orderId = req.params.orderId;
            const {status}  = req.body;
            console.log(req.body);
            console.log(status);
            const user = req.user;
        
            if (status != "refunded" && !user.roles.includes("ADMIN")) {
                return res.status(403).send({ message: "Only admin can change status on cancelled or completed" });
            }

            let updatedOrder = await OrderService.changeOrderStatus(orderId, status);

            let order = new OrderDto(updatedOrder);

            return res.send(order);

        } catch (error) {
            console.log(error)
            next(error)
        }

    }
}

export default new OrderController()