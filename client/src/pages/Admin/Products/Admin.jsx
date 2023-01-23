import React, { useState, useEffect, useReducer } from 'react'
import Container from '../../../components/UI/container/Container';
import Pagination from '../../../components/UI/Paggination/Pagination';
import ProductTable from './components/ProductTable';
import ProductTableHeader from './components/ProductTableHeader';
import { useProducts } from '../../../utilities/hooks/useProducts';
import ProductService from '../../../api/ProductService';
import "./style.css"
import CreateProductModal from './components/CreateProductModal';
import EditProductModal from './components/EditProductModal';
import Loading from '../../../components/Loading/Loading';
import { useFetching } from '../../../utilities/hooks/useFetching';
import paginateItems from '../../../utilities/paginateItems';
import { useNavigate, useParams } from 'react-router-dom';
import createProductLitPaginationUrl from '../../../utilities/createProductListPaginationUrl';
import productReducer from '../../../reducers/productReducer';
export default function Admin() {

    const [productsState, dispatch] = useReducer(productReducer, [])
    const [editedProduct, setEditProduct] = useState(null)
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [createProductForm, setCreateProductForm] = useState(false)
    const [editProductForm, setEditProductForm] = useState(false)
    const params = useParams();
    const navigate = useNavigate();


    const filteredProducts = useProducts(productsState, category, title);
    const currentProducts = paginateItems(filteredProducts, 10, currentPage);
    const paginationUrl = createProductLitPaginationUrl(title, category, true);

    const [fetchingGetProducts, loadProducts] = useFetching(async () => {
        let products = await ProductService.getAllProducts(true);
        dispatch({ type: "fetchProducts", payload: { products } })
    });

    const [fetchingAddProduct, isAdded] = useFetching(async (product) => {
        let result = await ProductService.addProduct(product);
        dispatch({ type: "addProduct", payload: { product: result } });
    })

    const [fetchingUpdateProduct, loadUpdate] = useFetching(async (product) => {
        let result = await ProductService.updateProduct(product);
        dispatch({ type: "updateProduct", payload: { product: result } });
    })

    const [fetchingRemoveProduct, loadRemove] = useFetching(async (id) => {
        await ProductService.removeProduct(id);
        dispatch({ type: "removeProduct", payload: { id } });
    });

    useEffect(() => {
        fetchingGetProducts();
    }, [])

    useEffect(() => {
        const { category, text, page } = params;
        setCategory(category? category :'');
        setTitle(text ? text : '');

        page ? setCurrentPage(page) : setCurrentPage(1);


    }, [params])


    function changeCategory(category) {
        let url = createProductLitPaginationUrl(title, category, true) + '/page=1'
        navigate(url);
    }

    function changeTitle(title) {
        let url = createProductLitPaginationUrl(title, category, true) + '/page=1'
        navigate(url);
    }

    async function addProduct(product) {

        let {isSucceed} =  await fetchingAddProduct(product);
        if(isSucceed){
            setCreateProductForm(false)
        }

        return isSucceed;
    }

    async function editProduct(product) {
        let {isSucceed}  =  await fetchingUpdateProduct(product);
        if(isSucceed){
            setEditProductForm(false)
        }

        return isSucceed;
    }

    async function removeProduct(id) {
        return await fetchingRemoveProduct(id)
    }

    function showEditProductForm(id) {
        let product = [...productsState].find(product => product.id == id);
        setEditProduct(product);
        setEditProductForm(true);
    }



    return (
        <Container>
            {
                loadProducts ?

                    <Loading />
                    :
                    <>
                        <CreateProductModal
                            isAdded={isAdded}
                            addProduct={addProduct}
                            setCreateProductForm={setCreateProductForm}
                            isVisible={createProductForm} />
                        <EditProductModal
                            loadUpdate={loadUpdate}
                            product={editedProduct}
                            setEditProductForm={setEditProductForm}
                            isVisible={editProductForm}
                            editProduct={editProduct} />

                        <ProductTableHeader
                            setCreateProductForm={setCreateProductForm}
                            category={category} changeCategory={changeCategory}
                            title={title} changeTitle={changeTitle}
                            productCount={filteredProducts.length} />
                        <ProductTable products={currentProducts} editProduct={showEditProductForm} removeProduct={removeProduct} loadRemove={loadRemove} page={currentPage} />

                        <Pagination totalItems={filteredProducts.length} itemsPerPage={10} currentPage={currentPage} paginationUrl={paginationUrl} />
                    </>
            }
        </Container>
    )
}
