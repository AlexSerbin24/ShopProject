import Order from "../Models/Order.js";

class OrderService{
    async addOrders(orders){
        await Order.insertMany(orders);
    }

    async getUserOrders(userId){
        let orders = await Order.find({user:userId}).populate({path:"product", select:"title imagines", populate:{path:"imagines"}});
        return orders;
    }

    async changeOrderStatus(orderId, status){
        let order = await Order.findById(orderId).populate({path:"product", select:"title imagines", populate:{path:"imagines"}});
        order.status = status;
        await order.save();
        return order;
    }

    async getOrders(){
        let orders = await Order.find().populate({path:"product", select:"title"});
        return orders;
    }
}

export default new OrderService();