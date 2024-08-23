import React from 'react'
import { useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'





function LogoutBtn() {
  const dispatch = useDispatch()

  const longoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout());
      // using a promis to catch the logout of the user
    })
  }
  return (
    <button className="inline-block px-6 py-2 
    duration-200 hover:bg-blue-100 
    rounded-full">
      {/* just paaaing the handler and not executing it 
      here */}
      onClick={longoutHandler}
    </button>
  )
}

export default LogoutBtn
