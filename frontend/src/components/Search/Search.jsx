import React, { useEffect} from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { productByName } from '../../redux/actions/products';
import {connect} from 'react-redux';
import './Search.scss'
import { Link } from "react-router-dom";
const { Meta } = Card;
// import NavLink from './NavLink';

const Search = (props)=>{
    const productName = props.match.params.productName;
    useEffect(() => {
        productByName(productName)
    }, [productName])
    return (
        <div className="container">
 <div className="products">
            {props.products?.map((product) =>{
             const image = "http://localhost:3002/images/user/products/" + product.image_path
                return <div key={product._id} className="product">
                <Link className="product" key={product._id} to={'/product/'+product._id}>
                <Card
                        hoverable
                        cover={product.image_path?.includes('http') ?
                        <img src={product.image_path} alt="" /> : <img src={image} alt="" />
                      }
                    >
                        <Meta title={product.name} description={product.price + '€'} />
                    </Card></Link>
                    
    
                </div>
            }
        
           )
            }
        </div>
        </div>
       


    )
}
const mapStateToProps = (state) => ({products:state.product.productByName});
export default connect(mapStateToProps)(Search)
