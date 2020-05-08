import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import './Home.scss'
import { products } from '../../redux/actions/products';
import SliderRecientes  from './SliderRecientes/SliderRecientes';
import { Link } from 'react-router-dom'
const { Meta } = Card;

 const Home = (props) => {
    useEffect(()=>{
        products();
    },[])
    return (
      <div >
        <h1>Last products</h1>
        <SliderRecientes/>
      <br/>
      <div className="products">
        
        { props.products?.map(function(product) {
          return <div key={product._id} className="product">
            <Link className="product" key={product._id} to={'/product/'+product._id}>
                  <Card hoverable cover={<img alt="example" src={product.image_path} />}>
    <Meta title={product.name} description={product.price + '€'} />
  </Card></Link>
                </div>
            })
        }
        </div>
            
        </div> 
    )
}

const mapStateToProps = (state) => ({products:state.product?.product});
export default connect(mapStateToProps)(Home)
