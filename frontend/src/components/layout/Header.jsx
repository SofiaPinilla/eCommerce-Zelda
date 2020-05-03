import React from "react";
import {Link} from 'react-router-dom'
import './Header.scss'
import 'antd/dist/antd.css';
import zelda from './zelda.png'
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Header() {
 
    return (
      <div className="header">
      <img src={zelda} xalt=""/>
        <Menu  mode="horizontal">
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/about">About</Link></Menu.Item>

          <SubMenu
          title={
            <>
              Categorias
            </>
          }
        >
          <Menu.ItemGroup title="">
            
         <Menu.Item key="setting:1"><Link to="/category/consolas">Consolas</Link> </Menu.Item>
        <Menu.Item key="setting:2"><Link to="/category/Videojuegos">Videojuegos</Link></Menu.Item>
        <Menu.Item key="setting:3"><Link to="/category/Amiibos">Amiibos</Link></Menu.Item>
          </Menu.ItemGroup>
         
        </SubMenu>
         
        <SubMenu
          title={
            <>
     <UserOutlined />
              Usuario
            </>
          }
        >
          <Menu.ItemGroup title="">
            
         <Menu.Item key="setting:4"><Link to="/login">Iniciar Sesión</Link> </Menu.Item>
        <Menu.Item key="setting:5"><Link to="/register"  >Registro</Link></Menu.Item>
          </Menu.ItemGroup>
         
        </SubMenu>
      </Menu>
      </div>
    )
}
