import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './Profile.scss'
import { getUserInfo } from '../../redux/actions/user';
import { Card } from 'antd';
const Profile = ({user}) => {
    useEffect(()=>{
        getUserInfo();
    },[])
    // console.log(props.user)
    return (
<div className="site-card-border-less-wrapper">
    <Card title={user?.nombre} bordered={false} style={{ width: 300 }}>
         <p>Surname: {user?.apellidos}</p>
         <p>DNI: {user?.DNI}</p>
         <p>Email: {user?.email}</p>
    </Card>
  </div>
    )
}
const mapStateToProps = ({user}) => ({user:user?.user});
export default connect(mapStateToProps)(Profile)