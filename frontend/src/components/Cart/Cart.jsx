import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import { order } from '../../redux/actions/orders';
import { InputNumber,Button } from 'antd';
import './Cart.scss'
import { setCart, clearCart } from '../../redux/actions/products';

const Cart = ({ products }) => {
    const onChange = (product,index, units) => {
        const productsCopy =[...products];
        product.units = units;
        productsCopy.splice(index,1,product);
        setCart(productsCopy);
    }
    return (
        <div className="listaFavoritos">
            <h1 className="title">Cart</h1>
            {products?.map( (product,index)=> {
                return <div key={product?._id} className="cart">

                    <div className="favoritos">
                        <Link key={product?._id} to={'/product/' + product?._id}>  <img src={product?.image_path} alt="" /></Link>
                        <span> {product?.name} </span>
                        <InputNumber min={1} max={10} defaultValue={product.units} onChange={onChange.bind(this, product,index)} />
                    </div>
                </div>
            })
            }
            <Button type="primary"onClick={() => clearCart()}>clearCart</Button>
        </div>
    )
}
const mapStateToProps = ({ product }) => ({ products: product?.cart });
export default connect(mapStateToProps)(Cart)