import { useMemo } from "react";

export const useOrders = function (orders, filters) {
    const filteredProducts = useMemo(() => {
        return orders.filter(order=>
            (!filters.customer || order.customer.toLocaleLowerCase().includes(filters.customer.toLocaleLowerCase())) &&
            (!filters.adress || order.adress.toLocaleLowerCase().includes(filters.adress.toLocaleLowerCase())) &&
            (!filters.phoneNumber || order.phoneNumber.includes(filters.phoneNumber)) &&
           (!filters.fromDate || order.date>= filters.fromDate) &&
           (!filters.toDate || order.date <= filters.toDate) &&
           (!filters.status || order.status ==filters.status));
    }, [filters, orders])

            
    return filteredProducts;
}


