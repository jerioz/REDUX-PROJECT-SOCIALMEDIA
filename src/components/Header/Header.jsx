import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.styles.scss'
import { Menu, notification, } from 'antd'
import { LoginOutlined, HomeOutlined, UserAddOutlined, LogoutOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from '../../features/auth/authSlice' 
import { useState } from 'react'


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, message } = useSelector((state) => state.auth);

  const onLogout = () => {

  dispatch(logout())
      navigate('/login');
   
  };

  useEffect(() => {
    if(isSuccess) {
      notification.success({message: 'Success', description: message})
    }
    dispatch(reset())
  }, [isSuccess, message])




  return (
    <>
    <header className='header__socialPage'>
        <h1 className='header__socialPage-title'>Expecting Rain Discussion</h1> 
        
        <nav>
            <Menu mode="horizontal" className='menu-nav__menu' defaultSelectedKeys={['profile']}>
           
				{user ? (
         <>
         <Menu.Item key="home" icon={<HomeOutlined />}>
         <Link to="/home">Home</Link>
       </Menu.Item>
         <Menu.Item key="logout" onClick={onLogout} icon={<LogoutOutlined />}>
           <Link to="/logout">Logout</Link>
         </Menu.Item>
         <Menu.Item key="profile" icon={<UserOutlined />}>
						<Link to="/profile">{user.name}</Link>
					</Menu.Item>
          <Menu.Item key="search" icon={<KeyOutlined />}>
         <Link to="/search/:title">Search</Link>
       </Menu.Item>
     
         </>
        ) : (
       
             <>
             <Menu.Item key="register" icon={<UserAddOutlined />}>
               <Link to="/">Register</Link>
             </Menu.Item>
               <Menu.Item key="login" icon={<LoginOutlined />}>
                 <Link to="/login">Login</Link>
               </Menu.Item>
               </>
        )}
			</Menu>
        </nav>
    </header>
    </>
  )
}

export default Header