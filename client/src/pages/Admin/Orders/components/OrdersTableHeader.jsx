import React from 'react'
import Input from '../../../../components/UI/input/Input'
import Label from '../../../../components/UI/label/Label';
import Select from '../../../../components/UI/Select/Select'
import "../style.css";

export default function OrdersTableHeader({filters, changeFilters }) {
  return (
    <div  className='orders-table-header'>
      <h2>Orders </h2>
      <div className='orders-table-filters'>
        <Input type="text" value={filters.customer}   onChange={(event) => changeFilters({ ...filters, customer: event.target.value })} placeholder='Customer' />
        <Input type="tel" value={filters.phoneNumber} onChange={(event) => changeFilters({ ...filters, phoneNumber: event.target.value })} placeholder='Phone number' />
        <Input value={filters.adress} onChange={(event) => changeFilters({ ...filters, adress: event.target.value })} placeholder='Adress' />
        <Select value={filters.status} onChange={(event) => changeFilters({ ...filters, status: event.target.value })} placeholder='Status'>
          <option disabled>Select orders status</option>
          <option value=''>All</option>
          <option value='pending'>Pending</option>
          <option value='refunded'>Refunded</option>
          <option value='delivered'>Delivered</option>
          <option value='cancelled'>Cancelled</option>
          <option value='completed'>Completed</option>
        </Select>


        <Label className="orders-table-data-filter" title={"From date"}>
          <Input width={100} type="date" value={filters.fromDate} onChange={(event) => changeFilters({ ...filters, fromDate: event.target.value })} placeholder='From date' />
        </Label>
        <Label  className="orders-table-data-filter"   title={"To date"}>
          <Input width={100} type="date" value={filters.toDate} onChange={(event) => changeFilters({ ...filters, toDate: event.target.value })} placeholder='To date' />
        </Label>
      
      </div>
    </div>
  )
}
