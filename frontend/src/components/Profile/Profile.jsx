import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './Profile.scss'
import { getUserInfo } from '../../redux/actions/user';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
const Profile = ({user}) => {
    useEffect(()=>{
        getUserInfo();
    },[])
    return (
<div className="site-card-border-less-wrapper">
    <div className="datos">

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
  </div>
    )
}
const mapStateToProps = ({user}) => ({user:user?.user});
export default connect(mapStateToProps)(Profile)