import React from 'react'
import Modal from '../../../../components/UI/modal/Modal'
import ProductForm from './ProductForm'
import "../style.css"
export default function EditProductModal({product, editProduct, isVisible, loadUpdate, setEditProductForm}) {
    return (
        <Modal className={"product-create-modal-form"} title="Edit product" isVisible={isVisible} setModal={setEditProductForm}>
            <ProductForm editProduct={product} productAction={editProduct} loading={loadUpdate}/>
        </Modal>
    )
}
