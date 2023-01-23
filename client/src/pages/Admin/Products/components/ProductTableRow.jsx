import React from 'react'
import InfoButton from '../../../../components/UI/FontAwesomeButtons/InfoButton'
import EditButton from '../../../../components/UI/FontAwesomeButtons/EditButton'
import RemoveButton from '../../../../components/UI/FontAwesomeButtons/RemoveButton'
import ContainerImg from '../../../../components/UI/ContainerImg/ContainerImg'
import { useNavigate } from 'react-router-dom'
import defaultProductImage from "../../../../components/img/unknownProduct.png"
import "../style.css"
export default function ProductTableRow({ product, editProduct, removeProduct, number }) {
    const navigate = useNavigate();
    return (
        <tr>
            <td>{number + 1}</td>
            <td className='product-table-img-td'>
                <div className='product-table-img'>
                    {product.imagines.length ?
                        <ContainerImg img={product.imagines[0].image} />
                        :
                        <ContainerImg img={defaultProductImage} />
                    }
                </div>
            </td>
            <td>
                {product.title}
            </td>
            <td>
                {product.category}
            </td>
            <td>
                {product.price} $
            </td>
            <td className='product-table-actions'>
                <InfoButton onClick={(event) => navigate(`/product/${product.id}`)} />
                <EditButton onClick={(event) => editProduct(product.id)} />
                <RemoveButton onClick={(event) => removeProduct(product.id)} />
            </td>
        </tr>
    )
}
