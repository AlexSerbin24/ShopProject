import React from 'react'
import Select from '../../../../components/UI/Select/Select';
import Input from '../../../../components/UI/input/Input';
import Button from '../../../../components/UI/button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import "../style.css"
import CategoryOptions from '../../../../components/Category/CategoryOptions';

export default function ProductTableHeader({productCount, category, changeCategory, title, changeTitle, setCreateProductForm}) {
    return (
        <div className='product-table-header'>
            <h2>Products
                <span> {productCount}</span>
            </h2>
            <div className='product-table-filters'>
                <Select value={category} onChange={(event)=> changeCategory(event.target.value)}>
                <option disabled>Select category</option>
                    <option value=''>All</option>
                    <CategoryOptions/>
                </Select>
                <Input value={title} onChange={(event)=>changeTitle(event.target.value)} placeholder='Search' />
                <Button onClick ={setCreateProductForm}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add product
                </Button>
            </div>
        </div>
    )
}
