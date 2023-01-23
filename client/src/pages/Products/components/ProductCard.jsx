import React from 'react'
import { Link } from 'react-router-dom';
import CardTitle from '../../../components/UI/Card/CardTitle';
import CardBody from '../../../components/UI/Card/CardBody';
import CardImagine from '../../../components/UI/Card/CardImagine';
import Rating from '../../../components/Rating/Rating';
import defaultProductImage from "../../../components/img/unknownProduct.png"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../slices/cartSlice';
import AddToCartButton from '../../../components/UI/button/SpecialButtons/AddToCartButton';
import "../style.css"

export default function ProductCard({ product }) {

    const dispatch = useDispatch();

    const addToCartBtnHandleClick = function(event){

        dispatch(addToCart(product));
    } 

    return (
        <div className="product-card">
            <Link className="product-title" to={`/product/${product.id}`}>
                <CardTitle title={product.title} />
            </Link>
            <div>
                <Link to={`/product/${product.id}`}>
                    {product.imagines.length ?
                        <CardImagine img={product.imagines[0].image} />
                        :
                        <CardImagine img={defaultProductImage} />
                    }
                </Link>
            </div>
            <div>
                <CardBody>
                    <div className='product-card-body'>
                        <div className='product-rating'>
                            <Rating rating={product.rating}/>
                        </div>
                        <div className='product-card-price-container'>
                            <span className="product-price-in-card">${product.price}</span>
                            <AddToCartButton product={product}/>
                        </div>
                    </div>
                </CardBody>
            </div>
        </div>

    )
}
