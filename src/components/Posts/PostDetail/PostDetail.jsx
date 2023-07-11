import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../../features/posts/postsSlice'
import './PostDetail.styles.scss'
import { Card, Space } from 'antd'

const PostDetail = () => {
    const {post} = useSelector((state) => state.posts)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getById(id))
    })
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
      >
        <p>{post.content}</p>
        </Card>
      </Space>
    </div>
    </>
  )
}

export default PostDetail