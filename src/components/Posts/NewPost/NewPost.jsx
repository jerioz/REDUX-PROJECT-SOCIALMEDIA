import React, {useState} from 'react'
import { Form, Input, Button} from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {newPost} from '../../../features/posts/postsSlice'
import './NewPost.styles.scss'

const {TextArea} = Input

const NewPost = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const onFinish = (values) => {
        dispatch(newPost(values))
        navigate('/home')
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        }

  return (
    <>
    <div className='formPost__container'>
        <h1>New Post</h1>
    <Form 
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}

    >
        <Form.Item
        label="Title"
        name="title"
        
        rules={[{ required: true, message: "Please input your title!" }]}
        // onChange={onChange}
        >
            <Input  allowClear/>
        </Form.Item>
        <Form.Item
        label="Content"
        name="content"
        
        rules={[{ required: true, message: "Please input your content!" }]}
        // onChange={onChange}
        >
             <TextArea rows={10} allowClear/>
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

export default NewPost