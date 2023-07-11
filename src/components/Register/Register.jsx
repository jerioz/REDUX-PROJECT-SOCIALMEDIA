import React, { useState, useEffect } from 'react'
import {register, reset} from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button } from 'antd';
import './Register.styles.scss'
import { notification } from "antd";


const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age:''
    })

    const {name,email,password, age} = formData

    const dispatch = useDispatch()

    const { isSuccess, message, isError, } = useSelector((state) => state.auth);
    
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
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }



    
    //  const onFinish = (values) => {
    //     register(values)
    //     };
    
    // const onFinishFailed = (errorInfo) => {
    //     console.log("Failed:", errorInfo);
    //     };
    return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder='name' />
        <input type="email" name="email" value={email} onChange={onChange}  placeholder='email'/>
        <input type="password" name="password" value={password} onChange={onChange}  placeholder='password'/>
        <input type="number" name="age" value={age} onChange={onChange}  placeholder='age'/>
        <button type="submit">Register</button>
    </form>
//     <div className="container">
//     <h1>Register</h1>
//     <Form onFinish={onChange}
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     // initialValues={{ remember: true }}
//     autoComplete="off"
//     >
//         <Form.Item
//         label="Name"
//         name="name"
        
//         rules={[{ required: true, message: "Please input your name!" }]}
//         >
//             <Input value={name} />
//         </Form.Item>
//         <Form.Item
//         label="Age"
//         name="age"
        
//         rules={[{ required: true, message: "Please input your age!" }]}
//         >
//             <Input value={age} />
//         </Form.Item>
//         <Form.Item
//         label="Email"
//         name="email"
       
//         rules={[{ required: true, message: "Please input your email!" }]}
//         >
//             <Input value={email} />
//         </Form.Item>
//         <Form.Item
//         label="Password"
//         name="password"
       
//         rules={[{ required: true, message: "Please input your password!" }]}
//         >
//             <Input.Password value={password} />
//         </Form.Item>
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Button type="primary" htmlType="submit" onFinish={onSubmit}>
//             Submit
//             </Button>
//         </Form.Item>
//     </Form>
// </div>

    )
}

export default Register