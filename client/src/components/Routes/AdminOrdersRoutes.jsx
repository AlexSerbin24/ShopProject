import generateRoutesWithFilters from '../../utilities/generateRoutesWithFilters'
import Orders from '../../pages/Admin/Orders/Orders';

    const filters = ["customer", "phoneNumber", "fromDate", "toDate", "adress", "status"]

    const pathes = generateRoutesWithFilters('/admin/orders', filters);

    export const adminOrdersRoutes = pathes.map(path=>({path, component:Orders}))


    

