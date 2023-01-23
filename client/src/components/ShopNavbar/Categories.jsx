import React from 'react'
import DropdownMenuItem from '../UI/Navbar/DropdownMenuItem';
import categories from '../../utilities/categories';

export default function Categories({text}) {

    const href = text? `/products/text=${text}` :`/products`;
    return (
        <>
            {categories.map(category => <DropdownMenuItem key={category} title={category} href={`${href}/category=${category}/page=1`} />)}
        </>
    )
}
