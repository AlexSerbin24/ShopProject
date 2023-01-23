import React from 'react';
import ContainerImg from "../../../components/UI/ContainerImg/ContainerImg"
import logo from "../../../components/img/unknownProduct.png"
import   "../style.css";

export default function OrderProduct({cartLine}) {
    return (
        <li>
            <h3>Product</h3>
            <div className="order-product">
                <div className="order-product-name">
                    <div className="order-product-img-container">
                        <ContainerImg img={cartLine.product.imagines && cartLine.product.imagines.length? cartLine.product.imagines[0].image: logo}/>
                    </div>
                    <p>{cartLine.product.name}</p>
                </div>
                <div className="order-product-prop">
                    <p className="order-product-prop-name">Price</p>
                    <p className="order-product-prop-value">{cartLine.product.price} $</p>
                </div>
                <div className="order-product-prop">
                    <p className="order-product-prop-name">Count</p>
                    <p className="order-product-prop-value">{cartLine.count}</p>
                </div>
                <div className="order-product-prop">
                    <p className="order-product-prop-name">Total</p>
                    <p className="order-product-prop-value">{cartLine.product.price * cartLine.count} $</p>
                </div>
            </div>
        </li>
    )
}
