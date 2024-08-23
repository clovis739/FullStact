import {Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import authService from '../appwrite/auth'
import Button from "./Button"
import Input from "./Input"
import Logo from './Logo'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {login as authLogin} from '../store/authSlice'





export default SignUp
