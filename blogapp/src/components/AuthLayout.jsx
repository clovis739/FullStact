import React from 'react'
import  { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'




function Protected({children, authentication = true}) {
  const authStatus = useSelector((state) => state.auth.status )

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (authentication && authStatus !== authentication)
    {
      // if user is not authenticated when he is supoosed to be 
      // ut he is not and trying to get access to the home route we just redirect the user back to login page 
      // so that he can register back in to the system 
      navigate("/login")

    }else if(!authentication && authStatus !== authentication){
      // here if the user.{ authentication is not true ans the authStatus is not equall to authetications means the usre is already logged in 
     // in to the  system there by redirect hime in to the home page let him not see 
    //  any of the authentication pages }
    navigate("/")
    }
    setLoader(false)
  
    
    
  }, [authentication, authStatus, navigate])
  
  return loader ? null : <> {children}</>
  
}

export default Protected


// if(authentication {true}){
//   if(authStatus !== authentication {false}){
//     // authentication {True}, 
//     // authStatus not equall to authentication {false}
//     // u are not autheticated 
//     // go to  authentication pages
//   }
// }