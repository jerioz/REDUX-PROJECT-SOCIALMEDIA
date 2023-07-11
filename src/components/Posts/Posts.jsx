import React, { useEffect } from 'react'
import Post from '../Posts/Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../features/posts/postsSlice'


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
    <h1>Posts</h1>
    
    {isLoading ? ( 
      'Cargando...' 
    ) : (
      <section>
    {posts && posts.map((post) => (
        <Post key={post._id} title={post.title} content={post.content} id={post._id}/>
    ))}
    </section>
    )}
    </>
  )
}

export default Posts