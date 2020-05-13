import React from 'react'
// import { order } from '../../redux/actions/orders';
import { connect } from 'react-redux';
const OrderDetail = ({ products }) => {
    return (
        <div>
            <h1 className="title">Detalles Pedido</h1>
            <div className="cart">
                <p>
                    {products?.reduce((prev, cur) => prev + cur.price,0)?.toFixed(2)}€
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = ({ product }) => ({ products: product?.cart });
export default connect(mapStateToProps)(OrderDetail)