export default function getTotalOrderPrice(orders){
    let totalPrice = 0;
    orders.forEach(order => {
        let {price, count} = order.cartLine.product;
        totalPrice += price * count + order.delivery.cost;
    });

    return totalPrice;
}