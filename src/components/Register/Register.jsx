import React, { useState, useEffect } from 'react'
import {register, reset} from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button } from 'antd';
import './Register.styles.scss'
import { notification } from "antd";
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age:'',
       
    })

    const {name,email,password, age} = formData

    const dispatch = useDispatch()

    const { isSuccess, message, isError, } = useSelector((state) => state.auth);

    const navigate = useNavigate()
    
    useEffect(() => {
        if (isSuccess) {
            notification.success({
                message: "Success",
                description: message,
            });
        }
        if (isError) {
            notification.error({
                message: "Error",
                description: message,
            })
        }
        dispatch(reset())
}, [isSuccess, isError, message]);

    const onChange = (e)=>{
        const name = e.target.id.split("_")[1]
        setFormData((prevState)=> ({
            ...prevState,
            [name]:e.target.value,
        }))
    }
    
    const onFinish = (values) => {
        dispatch(register(formData))
        navigate('/login')

    }
    
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        }

    
    return (
    <>
    <div className="register__container">
    <h1>Register</h1>
    <Form 
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
        <Form.Item
        label="Name"
        name="name"
        
        rules={[{ required: true, message: "Please input your name!" }]}
        onChange={onChange}
        >
            <Input  />
        </Form.Item>
        <Form.Item
        label="Age"
        name="age"
        
        rules={[{ required: true, message: "Please input your age!" }]}
          onChange={onChange}
        >
            <Input />
        </Form.Item>
        <Form.Item
        label="Email"
        name="email"
       
        rules={[{ required: true, message: "Please input your email!" }]}
          onChange={onChange}
        >
            <Input />
        </Form.Item>
        <Form.Item
        label="Password"
        name="password"
       
        rules={[{ required: true, message: "Please input your password!" }]}
          onChange={onChange}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
    </Form>
</div>
</>

    )
}

export default Register