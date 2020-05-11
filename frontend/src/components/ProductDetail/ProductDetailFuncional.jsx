import React, {  useEffect } from 'react'
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { HeartOutlined } from '@ant-design/icons';
import { addCart, like, getProductDetail,unLike } from '../../redux/actions/products';
import { connect } from 'react-redux';

import { ShoppingCartOutlined } from '@ant-design/icons';
// import { Card } from 'antd';

// const { Meta } = Card;
const ProductDetailFuncional = ({ productDetail,user }) => {
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    const isAlreadyLiked = productDetail?.favoritos?.includes(user._id);
    useEffect(() => {//componentDidMount() equivalent
        getProductDetail(_id);
    }, []);
    if(!productDetail)return 'cargando'
    const favoritos = productDetail?.favoritos
    return (<div className="product2">

        <div> <img src={productDetail.image_path} alt="" /></div>

        <div>
            <h1>{productDetail.name} </h1>
            <span> Description: {productDetail.description}</span>
            <br />
            <span>Price:{productDetail.price}€</span>
            <br />
            <span>Stock:{productDetail.stock}</span>
            <br />
            <span >Favoritos: {favoritos?.length}</span><HeartOutlined />
            {console.log(favoritos)}
            <button onClick={isAlreadyLiked ? () =>unLike(productDetail._id, productDetail): () => like(productDetail._id, productDetail)}>add</button>
            <ShoppingCartOutlined onClick={addCart.bind(this, productDetail)} />

        </div>
    </div>)
}
export default connect((state) => ({ productDetail: state.product?.productDetail ,user: state.user.user}))(ProductDetailFuncional);