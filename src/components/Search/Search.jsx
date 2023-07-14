import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getByName } from '../../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Posts/Post/Post'
import { useNavigate } from 'react-router-dom'
import './Search.styles.scss'
import { Input } from 'antd'


const Search = () => {

  const navigate = useNavigate()
  
  const dispatch = useDispatch()
    const {title} = useParams()

const {posts} = useSelector((state) => state.posts)

    useEffect(() => {
    dispatch(getByName(title))
    }, [title])

    const [text, setText] = useState("");

    const handleChange = (e) => {
      if (e.key === "Enter") {
        navigate(`/search/${text}`)
      }
  }

  return (
    <>
    <h1 className='search__title'>Search Posts</h1>
    <div className='search__container'>
      <div className='search__container-search'>
    {/* <input onKeyUp={handleChange} placeholder="search post" name="text"  className='search__input'/> */}
    <Input placeholder="search post"
            value={text}
            className='search__input'
            allowClear
            enterButton='search post'
            onChange={(e) =>  setText(e.target.value)}
            onKeyPress={handleChange}
            />
      </div>
           
   {posts && posts.map((post) => (
    <Post key={post._id} title={post.title} content={post.content} id={post._id}/>
   ))}
      </div>

  

    </>
  )
}

export default Search