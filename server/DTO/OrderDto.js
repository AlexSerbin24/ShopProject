export default class OrderDto{
    constructor(order) {
        this.id=order._id;
        this.customer = `${order.name} ${order.lastName}`;
        this.phoneNumber = order.phoneNumber;
        this.adress = `${order.city}, ${order.street}`;
        if(order.deliveryType == "courier"){
            this.adress += `, ${order.house}, ${order.flat}`;
        }
        this.productTitle = order.product.title;
        if( order.product?.imagines)
            this.productImg = order.product.imagines[0]?.imageUrl;
        this.orderPrice = order.orderPrice;
        this.quantity = order.quantity;
        this.status = order.status;
        this.date = order.date.toISOString().split("T")[0];
    }
}

