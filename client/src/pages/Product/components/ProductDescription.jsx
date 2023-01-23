import React, { useState } from 'react';
import AddToCartButton from '../../../components/UI/button/SpecialButtons/AddToCartButton';
import Rating from '../../../components/Rating/Rating';
import "../style.css";

export default function ProductDescription({ product, rating }) {
    return (
        <div className="product-description" >
            <h1 className="product-name">{product.title}</h1>
            <Rating rating={rating} />
            <div className="product-price">
                <span>Price: {product.price}$</span>
            </div>
            <div>
                <p>Description:</p>
                <p className='product-description-text'>{product.description}</p>
            </div>
            <AddToCartButton product={product} />
        </div>
    )
}
