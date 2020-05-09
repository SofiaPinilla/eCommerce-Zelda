import React from 'react'
import {Link} from 'react-router-dom'
import './Amiibos.scss'
import { Button } from 'antd';
const Amiibos = () => {
    return (
        <div className="search2">
                   <h1 className="busca">Look for Amiibos!  <Button ghost><Link to="/category/Amiibos">Click here</Link></Button></h1>
                {/* <img src={link} alt=""/>    */}
        </div>
    )
}
export default Amiibos