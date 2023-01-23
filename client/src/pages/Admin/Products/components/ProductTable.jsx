import React from 'react'
import ProductTableRow from './ProductTableRow'
import Table from '../../../../components/UI/Table/Table'
import Loading from '../../../../components/Loading/Loading'
export default function ProductTable({ products, editProduct, removeProduct, loadRemove, page }) {
    return (
        <>
        {loadRemove && <Loading/>}
            <Table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th></th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length ?
                        products.map((product, index) => <ProductTableRow editProduct={editProduct} removeProduct={removeProduct} key={index} product={product} number={10 * (page-1) + index} />)
                        :
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>
                                There are no products...
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </>
    )
}
