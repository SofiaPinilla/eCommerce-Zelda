import React,{useEffect,useState} from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import axios from 'axios';
import './Home.scss'
const { Meta } = Card;
export default function Home() {
 const [products,setProducts] =useState([]);
 const getProducts = () => {
        axios.get('http://localhost:3002/products')
        .then(res => {
            const products = res.data;
            setProducts( products );
          }).catch(err => console.error(err))
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div className="products">
           
        { products.map(function(product) {
                return <div className="product">
                  <Card
    hoverable
    cover={<img alt="example" src={product.image_path} />}
  >
    <Meta title={product.name} description={product.price + '€'} />
  </Card>
                </div>
            })
        }
        </div>
            
       
    )
}
