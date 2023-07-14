import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { notification, Form, Input, Button } from "antd";
import './Login.styles.scss'


const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const {email,password} = formData
    
    const onChange = (e)=>{
        const name = e.target.id.split("_")[1]
        setFormData((prevState)=> ({
            ...prevState,
            [name]:e.target.value,
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
    
    const onFinish = (values) => {
        dispatch(login(formData))
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        }
   
    
    return (
        <>
       <div className="login__container">
    <h1>Login</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
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

export default Login