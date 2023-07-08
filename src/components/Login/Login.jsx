import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const navigate = useNavigate()

    const {email,password} = formData
    
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const dispatch = useDispatch()
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(login(formData))
        setTimeout(() => {
			const foundToken = JSON.parse(localStorage.getItem('token'))
			if (foundToken) {
				navigate('/profile')
			}
		}, 500)
      

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