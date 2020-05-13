import React from 'react'
import './CompleteOrder.scss';
import { connect } from 'react-redux';
const CompleteOrder = ({ productDetail,user }) => {
    return (
        <div className="orderFinished">
            <p>Congratulations {user.nombre}! Your order has been completed.</p>
        </div>
    )
}
export default connect((state) => ({ productDetail: state.product?.productDetail ,user: state.user.user}))(CompleteOrder);