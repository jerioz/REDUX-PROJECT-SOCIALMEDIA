import React, { useState } from 'react'
import {register} from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age:''
    })

    const {name,email,password, age} = formData

    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
        console.log('formData',formData)
    }
    
    return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="email" name="email" value={email} onChange={onChange}/>
        <input type="password" name="password" value={password} onChange={onChange}/>
        <input type="number" name="age" value={age} onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
    )
}

export default Register