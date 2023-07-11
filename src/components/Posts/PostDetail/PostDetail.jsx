import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../../features/posts/postsSlice'

const PostDetail = () => {
    const {post} = useSelector((state) => state.posts)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getById(id))
    })
  return (
    <>
    <h1>PostDetail</h1>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    </>
  )
}

export default PostDetail