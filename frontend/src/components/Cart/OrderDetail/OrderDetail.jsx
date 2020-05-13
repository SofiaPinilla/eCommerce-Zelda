import React from 'react'
// import { order } from '../../redux/actions/orders';
import { connect } from 'react-redux';
import './OrderDetail.scss'
const OrderDetail = ({ products }) => {
    return (
        <div>
            <h1 className="title">Order Detail</h1>
            <div className="cart">
                <p>
                    {products?.map(product=> {
                        return <div className="datos">
                           <p className="nombres">{product.name}</p> 
                    <p>{product.price} €</p>
                        </div>
                    }
                        ) }
                 <span className="totalPrice"> Total price: {products?.reduce((prev, cur) => prev + cur.price,0)?.toFixed(2)}€</span> 
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = ({ product }) => ({ products: product?.cart });
export default connect(mapStateToProps)(OrderDetail)