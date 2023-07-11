import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { notification } from "antd";
import './Login.styles.scss'

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
        <>
        <div className='login__container'>
            <h1 className='login__title'>Login</h1>
    <form className='login__form' onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} placeholder='input your email' className='login__input'/>
        <input type="password" name="password" value={password} onChange={onChange} placeholder='input your password' className='login__input'/>
        <button type="submit" className='login__button'>Login</button>
    </form>
    </div>
    </>
    )
}

export default Login