import api from ".././http/index";

class OrderService {
    async addOrders(customer, orders) {

        let orderEntities = [];

        orders.forEach(order => {
            let orderPrice = order.cartLine.product.price * order.cartLine.count + order.delivery.cost;

            let quantity = order.cartLine.count;

            let product = order.cartLine.product.id;

            let deliveryType = order.delivery.type;

            let { city, street, house, flat } = order.adress;

            let orderData = {
                ...customer,
                product,
                orderPrice,
                quantity,
                deliveryType,
                city,
                street,
                house,
                flat
            }
            orderEntities.push(orderData);
        });
        
        await api.post(`/orders`, orderEntities);
    }


    async getUserOrders(userId){
        let response =  await api.get(`/orders/user/${userId}`);
        return response.data;
    }

    async changeOrderStatus(orderId, status){
        let response = await api.put(`/orders/${orderId}`, {status},{headers:{"Content-Type":"application/json"}});
        return response.data;
    }

    async getOrders(){
        let response = await api.get(`/orders/`);
        return response.data;
    }

   
}

export default new OrderService();