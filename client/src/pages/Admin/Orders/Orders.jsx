import React, { useState, useEffect } from 'react'
import Container from '../../../components/UI/container/Container'
import Pagination from '../../../components/UI/Paggination/Pagination';
import OrdersTable from './components/OrdersTable'
import OrdersTableHeader from './components/OrdersTableHeader';
import { useFetching } from '../../../utilities/hooks/useFetching';
import OrderService from '../../../api/OrderService';
import Loading from '../../../components/Loading/Loading';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useOrders } from '../../../utilities/hooks/useOrders';
import generateLinkWithFilters from '../../../utilities/generateLinkWithFilters';
export default function Orders() {

    const [orders, setOrders] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    const filterDefaults = { customer: '', phoneNumber: '', fromDate: '', toDate: '', adress: '', status: '' }
    const [filters, setFilters] = useState(filterDefaults);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const [fetchOrders, loadOrders] = useFetching(async () => {
        let orders = await OrderService.getOrders();
        setOrders(orders);
    })




    const [fetchChangeStatus, loadChangeStatus] = useFetching(async (orderId, status) => {
        let order = await OrderService.changeOrderStatus(orderId, status);
        const cloneOrders = [...orders];

        let updatedOrder = cloneOrders.find(order => order.id == orderId);
        updatedOrder.status = order.status;

        setOrders(cloneOrders);

    })

    const filteredOrders = useOrders(orders, filters)

    useEffect(() => {
        fetchOrders();
    }, [])

    useEffect(() => {
        const { page } = params;
        page ? setCurrentPage(page) : setCurrentPage(1);

    }, [params])

    useEffect(() => {
        const filterParams = {...filterDefaults};
        for (const key in filterParams) {
            let searchParam = searchParams.get(key);
            if(searchParam) filterParams[key] = searchParam;
        }
        setFilters(filterParams);
    }, [searchParams])


    function changeFilters(filters) {
        let url = generateLinkWithFilters('/admin/orders', filters);
        navigate(url);
    }

    return (
        <Container>
            {
                loadOrders || loadChangeStatus ?
                    <Loading />
                    :
                    <>
                        <OrdersTableHeader filters={filters} changeFilters={changeFilters} />
                        <OrdersTable orders={filteredOrders} changeStatus={fetchChangeStatus} />
                        <Pagination totalItems={filteredOrders.length} itemsPerPage={10} currentPage={currentPage} />
                    </>
            }
        </Container>
    )
}
