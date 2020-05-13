import React, {  useEffect } from 'react'
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { HeartOutlined,HeartFilled  } from '@ant-design/icons';
import { addCart, like, getProductDetail,unLike } from '../../redux/actions/products';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import { Card } from 'antd';

// const { Meta } = Card;
const ProductDetailFuncional = ({ productDetail,user }) => {
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    const isAlreadyLiked = productDetail?.favoritos?.includes(user?._id);
    useEffect(() => {//componentDidMount() equivalent
        getProductDetail(_id);
    });
    if(!productDetail)return 'cargando'
    const favoritos = productDetail?.favoritos
    return (<div className="product2">

        <div> <img src={productDetail.image_path} alt="" /></div>

        <div className="description">
            <div>
            <h1>{productDetail.name} </h1>
            <span> Description: {productDetail.description}</span>
            <br />
            <span>Price:{productDetail.price}€</span>
            <br />
            <span>Stock:{productDetail.stock}</span>
            <br />
          
            {console.log(favoritos)}
            </div>
           
            <span >Favoritos: {favoritos?.length}</span>

            <div className="botones">
                <div className="like">
                {isAlreadyLiked ?
 < HeartFilled  onClick={isAlreadyLiked ? () =>unLike(productDetail._id, productDetail): () => like(productDetail._id, productDetail)}/>:
 <HeartOutlined onClick={isAlreadyLiked ? () =>unLike(productDetail._id, productDetail): () => like(productDetail._id, productDetail)}/>
                }
                </div>
                
            <Button type="primary" onClick={addCart.bind(this, productDetail)}>Add to cart<ShoppingCartOutlined  /></Button>  
            </div>
        </div>
    </div>)
}
export default connect((state) => ({ productDetail: state.product?.productDetail ,user: state.user.user}))(ProductDetailFuncional);