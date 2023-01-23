import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import getTotalPages from '../../../utilities/getTotalPages';
import classes from "./Pagination.module.css"
export default function Pagination({ totalItems, itemsPerPage,  currentPage, paginationUrl, ...props }) {

    const totalPages = getTotalPages(totalItems, itemsPerPage);
    
    const pages = [];
  
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }

    return (
        <div {...props} className={classes["pag-btns"]}>
            {pages.map(page =>
                <Link key={page} to={paginationUrl + `/page=${page}`}>
                    <Button isOutline={currentPage != page}>{page}</Button>
                </Link>)
            }
        </div>
    )
}
