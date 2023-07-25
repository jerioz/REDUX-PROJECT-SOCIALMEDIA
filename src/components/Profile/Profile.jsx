import { useDispatch, useSelector } from "react-redux";
import './Profile.styles.scss'
import { Card, Space } from "antd";
import { useEffect } from "react";
import {getAll} from '../../features/posts/postsSlice'
import Post from "../Posts/Post/Post";

const {Meta} = Card

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    
    const { post } = useSelector((state) => state.posts)

    const {posts} = useSelector((state) => state.posts)
    
   

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAll())
    }, [])


    return (
    <>
   
    <div className="profile__container">
    <h1>Profile</h1>
      <div className="profile__container-card">
      <Card
    style={{ width: 300 }}
    className="profile__card"
    cover={
      <img
        alt="photo"
        src={user.image}
        className="releases__img"
        style={{height: 300}}
        />}
      >
        <Meta
        title={user.name}
        description={user.email}
        />
    </Card>
    </div>
    <h2>Posts</h2>
   <section className="profile__posts-container">
{posts && posts.map((post) =>  (
  post.userId._id === user._id ? 
  <div className='profile__posts-post'>
  <Post key={post._id} title={post.title} id={post._id}/>
  </div> : null
  )
)}
  </section>
    </div>
    </>
    );

};

export default Profile;