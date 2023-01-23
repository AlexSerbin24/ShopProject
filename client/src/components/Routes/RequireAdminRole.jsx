import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';

export default function RequireAdminRole() {
    const {user} = useSelector(store=>store.user)

  return (
    user.roles.includes("ADMIN")? <Outlet/>:<Navigate replace={true} to={"/accessDenied"}/>
  )
}
