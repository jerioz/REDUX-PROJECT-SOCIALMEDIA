import React from 'react'
import { Form, Button, Input, Modal} from 'antd'
import { newCommentPost } from '../../../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

const {TextArea} = Input

const AddComment = ({visible, setVisible}) => {

  const {post} = useSelector((state) => state.posts)

    const [form] = Form.useForm()

    const dispatch = useDispatch()

    const onFinish =(values) => {
        const addComment ={...values, id: post._id}
        dispatch(newCommentPost(addComment))
        setVisible(false)
    }
  return (
    <>
    <Modal
    title="Add Comment"
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
        label="Comment"
        name="comment"
        >
             <TextArea rows={10} allowClear/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
            AddComment
            </Button>
          </Form.Item>
    </Form>
    </Modal>
    </>
  )
}

export default AddComment