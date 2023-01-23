import React from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../style.css"
import ContainerImg from '../../../components/UI/ContainerImg/ContainerImg'
import logo from "../../../components/img/unknownProduct.png"
import RemoveButton from '../../../components/UI/FontAwesomeButtons/RemoveButton'
import { useDispatch } from 'react-redux'
import { updateCartLine, removeCartLine } from '../../../slices/cartSlice'

export default function CartLine({ cartLine }) {

    const dispatch = useDispatch();

    return (
        <div className="cart-line-container">
            <div className='cart-line-product-img'>
                <ContainerImg img={cartLine.product.imagines && cartLine.product.imagines.length ? cartLine.product.imagines[0].image : logo} />
            </div>

            <div>
                <span>{cartLine.product.title}</span>
            </div>

            <div className="counter">
                <FontAwesomeIcon
                    onClick={(event) => {
                        if (cartLine.count - 1 > 0) {
                            dispatch(updateCartLine({ productId: cartLine.product.id, count: cartLine.count - 1 }))
                        }

                    }}
                    icon={faMinus}
                    className="counter-btn" />

                <input
                    onChange={(event) => {
                        if (event.target.value > 0) {
                            dispatch(updateCartLine({ productId: cartLine.product.id, count: +event.target.value }))
                        }
                    }
                    }
                    value={cartLine.count}
                    className="product-count-input"
                    type="number" />


                <FontAwesomeIcon
                    onClick={(event) => dispatch(updateCartLine({ productId: cartLine.product.id, count: cartLine.count + 1 }))}
                    icon={faPlus}
                    className="counter-btn" />
            </div>

            <div>
                <span>{cartLine.product.price}$</span>
            </div>

            <div className="remove-btn-container">
                <RemoveButton onClick={(event) => dispatch(removeCartLine(cartLine.product.id))} />
            </div>
        </div>
    )
}
