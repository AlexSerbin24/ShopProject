import React, { useState, useEffect } from 'react'
import Container from '../../components/UI/container/Container';
import ProductCard from './components/ProductCard'
import "./style.css";
import { useParams } from 'react-router-dom';
import { useProducts } from '../../utilities/hooks/useProducts';
import Pagination from '../../components/UI/Paggination/Pagination';
import createProductLitPaginationUrl from '../../utilities/createProductListPaginationUrl';
import paginateItems from '../../utilities/paginateItems';
import ProductService from '../../api/ProductService';
import Loading from '../../components/Loading/Loading';
import { useFetching } from '../../utilities/hooks/useFetching';

export default function Products() {


  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15)
  const [filters, setFilters] = useState({ category: '', text: '' });

  const params = useParams();

  const filteredProducts = useProducts(products, filters.category, filters.text);

  const currentProducts = paginateItems(filteredProducts, productsPerPage, currentPage);

  const paginationUrl = createProductLitPaginationUrl(filters.text, filters.category);

  const [fetchingGetProducts, loadProducts, error] = useFetching(async () => {
    let products = await ProductService.getAllProducts();
    setProducts(products)
  });


  useEffect(() => {
    fetchingGetProducts();

  }, [])


  useEffect(() => {
    const { category, text, page } = params;
    setFilters({ category, text });

    page ? setCurrentPage(page) : setCurrentPage(1);


  }, [params])



  return (


    <Container title="Products">
      {
        loadProducts ?
          <Loading />
          :
          <>
            <div className="products">
              {currentProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <Pagination totalItems={filteredProducts.length} itemsPerPage={productsPerPage} currentPage={currentPage} paginationUrl={paginationUrl} />
          </>
      }
    </Container>


  )
}
