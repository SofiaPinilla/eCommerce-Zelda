import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { connect } from 'react-redux';
import './Products.scss'
import { products } from '../../redux/actions/products';
import { Link } from 'react-router-dom'
const { Meta } = Card;
const Products = (props) => {
  useEffect(() => {
    products();
  }, [JSON.stringify(props.products)])
  return (
    <div>
      <h1 className="title">All products</h1>
      <img className="separador" src="https://zelda.com/assets/img/home/hyrule_rule.png" alt="" />
      <div className="products">
        {props.products?.reverse().map(function (product) {
          const image = "http://localhost:3002/images/user/products/" + product.image_path
          return <div key={product._id} className="product">
            <Link className="product" key={product._id} to={'/product/' + product._id}>
              <Card hoverable cover={product.image_path?.includes('http') ?
                <img src={product.image_path} alt="" /> : <img src={image} alt="" />
              }>
                <Meta title={product.name} description={product.price + '€'} />
              </Card></Link>
          </div>
        })
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({ products: state.product?.product });
export default connect(mapStateToProps)(Products)