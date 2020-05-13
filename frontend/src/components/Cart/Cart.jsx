import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import { order } from '../../redux/actions/orders';

import './Cart.scss'
const Cart = (props) => {

    return (
        <div >
            <h1 className="title">Cart</h1>
            {props.products?.map(function (product) {
                return <div key={product?._id} className="cart">
                    <Link key={product?._id} to={'/product/' + product?._id}>
                        <div className="favoritos">
                            <img src={product?.image_path} alt="" />
                            <span> {product?.name} </span>
                        </div></Link>
                </div>
            })
            }
            {/* <button onClick={() => order(props.products.map(p => p._id))}>Terminar pedido</button> */}
        </div>
    )
}
const mapStateToProps = (state) => ({ products: state.product?.cart });
export default connect(mapStateToProps)(Cart)