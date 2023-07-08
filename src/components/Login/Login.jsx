import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { notification } from "antd";


const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const {email,password} = formData
    
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { isError, isSuccess, message, user } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (isError) {
            notification.error({ message: "Error", description: message });
        }
        if (isSuccess && user) {
            notification.success({ message: "Success", description: message });
        setTimeout(() => {
            navigate('/profile');
        }, 500);
      
    }
    dispatch(reset())
    }, [isError, isSuccess, message]);
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }
   
    
    return (
    <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} placeholder='email'/>
        <input type="password" name="password" value={password} onChange={onChange} placeholder='password'/>
        <button type="submit">Login</button>
    </form>
    )
}

export default Login