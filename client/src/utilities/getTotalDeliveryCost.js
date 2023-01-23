export default function getTotalDeliveryCost(orders){
    if(!orders.length) return 0;
    return orders.map(order=>order.delivery.cost).reduce((prev,next)=>prev+next);
}