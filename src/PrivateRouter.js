
import React from 'react';

import {Navigate, Outlet, useLocation} from 'react-router-dom'

// We created our custom hook which is useAuth
const useAuth=()=>{
  const user=localStorage.getItem('userInfo')
  if(user){
    return true
  } else {
    return false
  }
}

const PrivateRouter=(props) =>{
    const location = useLocation()
    const auth=useAuth()

  return auth?<Outlet {...props} />: <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRouter;
