import React, { useEffect } from 'react'
import Post from '../Posts/Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../features/posts/postsSlice'
import './Posts.styles.scss'
import { Spin } from 'antd'


const Posts = () => {
    const dispatch = useDispatch()
    const {posts, isLoading} = useSelector((state) => state.posts)

    useEffect(() => {
       async function getData() {
        await dispatch(getAll())
       await dispatch(reset())
    }
    getData()
    },[])

  return (
    <>
    <h1 className='posts__title'>Posts</h1>
    
    {isLoading ? ( 
      <Spin size="large" /> 
    ) : (
      <section className='posts__container'>
    {posts && posts.map((post) => (
      <div className='posts__post'>
        <Post key={post._id} title={post.title} content={post.content} id={post._id}/>
      </div>
    ))}
    </section>
    )}
    </>
  )
}

export default Posts