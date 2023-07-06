import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { Menu, } from 'antd'
import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <>
    <header className='header__socialPage'>
        <h1 className='header__socialPage-title'>Expecting Rain Discussion</h1> 
        <nav>
            <Menu mode="horizontal" className='menu-nav__menu' defaultSelectedKeys={['profile']}>
				<Menu.Item key="home" icon={<HomeOutlined />}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key="register" icon={<UserAddOutlined />}>
					<Link to="/register">Register</Link>
				</Menu.Item>
					<Menu.Item key="login" icon={<LoginOutlined />}>
						<Link to="/login">Login</Link>
					</Menu.Item>
			</Menu>
        </nav>
    </header>
    </>
  )
}

export default Header