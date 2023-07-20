import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../../features/posts/postsSlice'
import './PostDetail.styles.scss'
import { Card, Space, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { deletePost } from '../../../features/posts/postsSlice'
import EditPost from '../Post/EditPost/EditPost'

const PostDetail = () => {
    const {post} = useSelector((state) => state.posts)
    const {id} = useParams()
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        dispatch(getById(id))
    }, [])

    const showModal = (id) => {
      console.log(id)
      dispatch(getById(id))
      setIsModalVisible(true)
    }


  return (
    <>
     <h1 className='postDetail__title'>PostDetail</h1>
    <div className='postDetail__container'>
   <Space direction="vertical" size={16}>
        <Card className="postDetail__card"
        title={post.title}
        style={{
        width: 800,
        }}
        cover={
          <img
            alt="photo"
            src={post.image}
            style={{height: 300}}
            />}
      >
        <p>{post.content}</p>
        <h3>Comments</h3>
        {post.comments && post.comments.map((comment) => (
          <p>{comment.comment}</p>
        ))}
        <Button type="primary" htmlType="submit" danger icon={<DeleteOutlined />} onClick={() => dispatch(deletePost(post._id))} >DeletePost</Button>
        <Button type="primary" htmlType="submit" icon={<EditOutlined />} onClick={() => showModal(post._id)}>UpdatePost</Button>
        </Card>
      </Space>
      <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
    </>
  )
}

export default PostDetail