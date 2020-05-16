import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './Profile.scss'
import { getUserInfo } from '../../redux/actions/user';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Profile = ({user}) => {
    useEffect(()=>{
        getUserInfo();
    },[])
    return (
<div className="site-card-border-less-wrapper">
    <div >

    <h1>Datos</h1>
    <Card title={user?.nombre} bordered={false} style={{ width: 300 }}>
         <p>Surname: {user?.apellidos}</p>
         <p>DNI: {user?.DNI}</p>
         <p>Email: {user?.email}</p>
        
    </Card>
    </div>
    <div>
        <h1>Favoritos</h1>
    {user?.favoritos?.map(favorito=> {return(
        <Link key={favorito._id} to={'/product/'+favorito._id}>
<div className="favoritos"> 
<img src={favorito.image_path} alt=""/>
    <span> {favorito.name} </span>
</div></Link>
            )}
)}
    </div>
    <div>
        <h1>My orders</h1>
    {user?.orderIds?.map(order=> {return(
<div className="pedidos">
<Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header={order.status} key="2">
      <p>Order: {order.productIds?.map(product => { return (

      <div>
          <p>Product: {product._id.name}</p> 
      <p className="unidades">
      Units: {product.units} </p>
      <p className="unidades">
     Price/unit: {product._id.price}€ </p>
      Total price:{product.units*product._id.price}€
      </div>
      )
          })} 
         </p>
    {/* <p>{product.units}</p> */}
    <p>    Total price: {order.productIds?.reduce((prev, cur) => prev + (cur._id.price*cur.units),0)?.toFixed(2)}€</p>
    </Panel>
  </Collapse>
    
</div>
    )})}     
    </div>
  </div>
    )
}
const mapStateToProps = ({user}) => ({user:user?.user});
export default connect(mapStateToProps)(Profile)