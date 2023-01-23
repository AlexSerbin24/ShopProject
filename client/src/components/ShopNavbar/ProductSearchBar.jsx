import React from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import "./style.css";
export default function ProductSearchBar({text, changeText, searchProducts}) {

  function submitSearchBar(event){
    event.preventDefault();
    searchProducts();
  }

  return (
    <form onSubmit={submitSearchBar} className="search-product-form">
      <Input type="text" placeholder="Search" value={text} onChange={(event)=>changeText(event.target.value)} />
      <Button>Search</Button>
    </form>
  )
}
