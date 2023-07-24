import React, { useEffect } from 'react'
import { Form, Input, Modal, Button } from 'antd'
import {updatePost} from '../../../../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

const {TextArea} = Input

const EditPost = ({visible, setVisible}) => {

    const { post } = useSelector((state) => state.posts)

    const [form] = Form.useForm()

    const dispatch = useDispatch()
    

    useEffect(() => {
        form.setFieldsValue(post)
    }, [post])

    const onFinish = (values) => {
        const updatePostNew = {...values, id: post._id}
        dispatch(updatePost(updatePostNew))
         setVisible(false)
    }

 return (
    <>
    <Modal
    title="Edit Post"
    open={visible}
    footer={[]}
    >
    <Form 
    form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    autoComplete="off"
    onFinish={onFinish}
    >
        <Form.Item
        label="Title"
        name="title"
        >
            <Input  allowClear/>
        </Form.Item>
        <Form.Item
        label="Content"
        name="content"
        >
             <TextArea rows={10} allowClear/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
            UpdateProduct
            </Button>
          </Form.Item>
    </Form>
    </Modal>
    </>
  )
}

export default EditPost