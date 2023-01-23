import React from 'react'
import categories from '../../utilities/categories'
export default function CategoryOptions() {
    return (
        <>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </>
    )
}
