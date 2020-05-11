import React from "react";
import { Link, useHistory } from 'react-router-dom'
import './Header.scss'
import 'antd/dist/antd.css';
import logo from './shop.png'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/user';
import { Input } from 'antd';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;
const { SubMenu } = Menu;

function Header(props) {
  const history = useHistory();//el history del BOM dopado

  function handleChange(e) {
    if (e.key === 'Enter') {
      const productName = e.target.value;
      history.push('/search/' + productName);
    }
  }
  return (
    <div className="header">

      <Menu mode="horizontal">
        <Menu.Item>    <Link to="/"><img src={logo} alt="" /></Link>  </Menu.Item>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/products">Products</Link></Menu.Item>

        <SubMenu
          title={
            <>
              Categories
            </>
          }
        >
          <Menu.Item key="setting:1"><Link to="/category/consolas">Consoles</Link> </Menu.Item>
          <Menu.Item key="setting:2"><Link to="/category/Videojuegos">Video game</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link to="/category/Amiibos">Amiibos</Link></Menu.Item>
        </SubMenu>
        <Menu.Item><Link to="/about">About</Link></Menu.Item>
        <Menu.Item><Search onKeyUp={handleChange} placeholder="search product"
          onSearch={value => value}
          style={{ width: 200 }}
        /></Menu.Item>
        {/* tipico if de angular */}
        {props.user?.user ?
          <div className="userZone">
            <UserOutlined />
            <Link to='/profile' >{props.user.user.nombre}</Link>
            <Link to='login' onClick={logout}>Logout</Link>
            <Badge className="carrito" count={props.cart?.length}>
              <ShoppingCartOutlined  />
            </Badge>
          </div> : <div className="guestZone">
            <UserOutlined />
            <Link to='/login' >Login</Link>
            <Link to='/register' >Register</Link>

            </div>}
      </Menu>

    </div>
  )
}
const mapStateToProps = (state) => ({ user: state.user, cart: state.product.cart });
export default connect(mapStateToProps)(Header);