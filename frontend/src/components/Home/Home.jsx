import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Card,Button } from 'antd';
import {connect} from 'react-redux';
import './Home.scss'
import { products } from '../../redux/actions/products';
import SliderRecientes  from './SliderRecientes/SliderRecientes';
import { Link } from 'react-router-dom'
import Buscador from './Buscador/Buscador';
import Buscador2 from './Buscador2/Buscador2';
import Amiibos from './Amiibos/Amiibos';
import Videojuegos from './Videojuegos/Videojuegos';
import Consolas from './Consolas/Consolas';
const { Meta } = Card;

 const Home = (props) => {
    useEffect(()=>{
        products();
    },[])
    return (
      <div >
        <Buscador/>
        <Buscador2/>
        <h1>New arrivals</h1>
        <SliderRecientes/>
        <br/>
 <h1>Amiibos</h1>
 <Amiibos/>
 <h1>Video game</h1>
 <h2 >Choose a video game!  <Button ><Link to="/category/Videojuegos">Click here</Link></Button></h2>
 <Videojuegos/>
 <h1>Consoles</h1>
 <h2>From now you can buy Zelda edition consoles <Button ><Link to="/category/consolas">Click here</Link></Button></h2>
 <Consolas/>
      <br/>
       
            
        </div> 
    )
}

const mapStateToProps = (state) => ({products:state.product?.product});
export default connect(mapStateToProps)(Home)
