import React, {  useEffect } from 'react'
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { HeartOutlined,HeartFilled  } from '@ant-design/icons';
import { addCart, like, getProductDetail,unLike, addComment } from '../../redux/actions/products';
import { connect } from 'react-redux';
import { Button, Upload } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// const { Meta } = Card;
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const ProductDetailFuncional = ({ productDetail,user }) => {
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    const favoritos = productDetail?.favoritos
    const isAlreadyLiked = favoritos?.includes(user?._id);
    useEffect(() => {//componentDidMount() equivalent
        getProductDetail(_id);
    },[]);
    if(!productDetail)return 'cargando'
      const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        formData.set('comment', event.target.comment.value)
        // .then(dog => {
        //     notification.success({message:'Thank you, your opinion is important! '})
        // })
        // .catch((error)=>{
        //    console.error(error)
        // })
        addComment(productDetail._id,formData)
    }
  
    console.log(productDetail._id)
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
            <hr className="linea"/>
            <h2>Reviews</h2>
            <div>
                  <form action="" onSubmit={handle}>
                  <Input name="comment" placeholder="add comment" />
              
                  <Upload.Dragger  action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            {/* <input type="file" name="image"/> */}
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
                  <input  type="submit" value="add review" />
                  </form>
                </div>
          {productDetail.reviews.reverse().map(comment => {
              const image = "http://localhost:3002/images/user/comments/" + comment.image_path
               
              return (
              <div className="contenedor">
                
                <div className="comentarios">
                <p>{comment.comment}</p>
              <p>{comment.reviewDate}</p>
                <img src={image} alt=""/>
                </div>
               
                  </div>
           
              )
          })}
        
  
        </div>
   
    </div>)
}
export default connect((state) => ({ productDetail: state.product?.productDetail ,user: state.user.user}))(ProductDetailFuncional);