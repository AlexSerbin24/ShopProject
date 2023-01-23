import React from 'react'
import Modal from "../../../../components/UI/modal/Modal";
import ProductForm from './ProductForm'
import "../style.css"
export default function CreateProductModal({ isAdded, isVisible, setCreateProductForm, addProduct }) {
    return (
        <Modal className={"product-create-modal-form"} title="Create product" isVisible={isVisible} setModal={setCreateProductForm}>
            <ProductForm productAction={addProduct} loading = {isAdded}/>
        </Modal>
    )
}