import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import './Home.scss'
import { products } from '../../redux/actions/products';
import SliderRecientes  from './SliderRecientes/SliderRecientes';
const { Meta } = Card;

 const Home = (props) => {
//   products()
//         .then(res => {
//             const products = res.data;
//             setProducts( products );
//           }).catch(err => console.error(err))
//     }
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
                  <Card hoverable cover={<img alt="example" src={product.image_path} />}>
    <Meta title={product.name} description={product.price + '€'} />
  </Card>
                </div>
            })
        }
        </div>
            
        </div> 
    )
}

const mapStateToProps = (state) => ({products:state.product?.product});
export default connect(mapStateToProps)(Home)
