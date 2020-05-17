import React, {  useEffect } from 'react'
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { HeartOutlined,HeartFilled  } from '@ant-design/icons';
import { addCart, like, getProductDetail,unLike, addComment } from '../../redux/actions/products';
import { connect } from 'react-redux';
import { Button} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Rate } from 'antd';
import PrivateZone from '../../guards/PrivateZone';
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
        formData.set('points',  localStorage.getItem('index'))
        // .then(dog => {
        //     notification.success({message:'Thank you, your opinion is important! '})
        // })
        // .catch((error)=>{
        //    console.error(error)
        // })
        addComment(productDetail._id,formData)
    }
    const review = productDetail?.reviews
    console.log(review)
    const total= review?.reduce((prev, cur) => prev + cur.points,0)/ review.length
    console.log( review?.reduce((prev, cur) => prev + cur.points,0)/ review.length)
  const totalFixed = total.toFixed(1)
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
           
            <span >Favorites: {favoritos?.length}</span>
            <br/>
            <span>  Rate : <Rate disabled value = {totalFixed}/>  {totalFixed >= 0?
              <span>({totalFixed} de 5)</span>: ''}
            </span>
          

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
                  <Rate  name="rate"
          onChange={(index) => localStorage.setItem('index', `${index}`)}
         />
                  <Input name="comment" placeholder="add comment" />
                  <input type="file" name="image" id="file" class="input-file"/>
  <label for="file" class="btn btn-tertiary js-labelFile">
    <i class="icon fa fa-check"></i>
    <span class="js-fileName">Choose a file</span>
  </label> 
  
  <Button type="primary" >
                  <input className="input" type="submit" value="add review" />
        </Button>
                  </form>
                </div>
          {productDetail.reviews.reverse().map(comment => {
              // const image = "http://localhost:3002/images/user/comments/" + comment.image_path
               
              return (
              <div className="contenedor">
                
                <div className="comentarios">
              <h3>{comment?.userId?.nombre}</h3>
              <Rate disabled value = {comment?.points}/>
              <p>{comment.reviewDate}</p>
                <p>{comment.comment}</p>
                <img src={comment.image_path} alt=""/>
              {console.log(comment)}
                </div>
               
                  </div>
           
              )
          })}
        
  
        </div>
   
    </div>)
}
export default connect((state) => ({ productDetail: state.product?.productDetail ,user: state.user.user}))(ProductDetailFuncional);