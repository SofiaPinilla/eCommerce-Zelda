import React from "react";
import {Link, useHistory} from 'react-router-dom'
import './Header.scss'
import 'antd/dist/antd.css';
import zelda from './zelda.png'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/user';
const { SubMenu } = Menu;

function Header(props) {
  const history = useHistory();//el history del BOM dopado
 
  function handleChange(e) {
    if(e.key==='Enter'){
        const productName =e.target.value;
        history.push('/search/'+productName);
    }
  }
    return (
      <div className="header">
      <img src={zelda} alt=""/>
        <Menu  mode="horizontal">
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
     
         

        <div>
          <Menu.Item><input className="buscador" onKeyUp={handleChange} /></Menu.Item>

        </div>
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

        {/* tipico if de angular */}
        {props.user?.user?
            <div className="userZone">
                <Link to='/profile' >{props.user.user.nombre}</Link>
                {console.log(props.user)}
                <Link to='login'onClick={logout}>Logout</Link>
            </div> : <div className="guestZone">
              
            <Link to='/login' >Login</Link>
            <Link to='/register' >Register</Link>

            </div>}
       
      </Menu>
      
      </div>
    )
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Header);