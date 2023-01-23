import React from 'react'
import { Navigate, Outlet, useLocation, } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';

export default function RequireAuth() {
    const  {user, wasAuthChecked}  = useSelector(store=>store.user)
    const location = useLocation().pathname;
    return (
        <>
            {
                user == null
                    ?
                    (
                        wasAuthChecked
                            ?
                            <Navigate to={"/login"} replace={true} state={{ from: location }} />
                            :
                            <Loading />
                    )
                    :
                    <Outlet />
            }
        </>

    )

}
