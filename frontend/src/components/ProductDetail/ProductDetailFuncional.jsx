import React, { useState, useEffect } from 'react'
import axios from "axios";
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
// import { Card } from 'antd';

// const { Meta } = Card;
const ProductDetailFuncional = props => {
    const [product, setProduct] = useState({})//this.state
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {//componentDidMount() equivalent
        axios.get('http://localhost:3002/products/' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => setProduct(res.data))//actualizamos el estado acorde a la respuesta del servi
    });
    return (<div className="product2">
      
        <div> <img src={product.image_path} alt="" /></div>
 
        <div>
        <h1>{product.name} </h1>
        <span> Description: {product.description}</span>
    <br/>
    <span>Price:{product.price}€</span>
    <br/>
            <span>Stock:{product.stock}</span>
        </div>
   
  
        

    </div>)
}
export default ProductDetailFuncional;