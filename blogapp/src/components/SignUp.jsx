import {Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import authService from '../appwrite/auth'
import Button from "./Button"
import Input from "./Input"
import Logo from './Logo'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {login} from '../store/authSlice'





function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} =useForm()


    const create = async (data) =>{
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login({userData}))
                    navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default SignUp
