import React, { useState, useEffect } from 'react'
import axios from "axios";
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;
const ProductDetailFuncional = props => {
    const [product, setProduct] = useState({})//this.state
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {//componentDidMount() equivalent
        axios.get('http://localhost:3002/products/' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => setProduct(res.data))//actualizamos el estado acorde a la respuesta del servi
    }, []);
    return (<div className="product2">
    <Card hoverable cover={<img src={product.image_path} alt="" />}>
    <Meta title={product.name} description={product.description} />
    <br/>
    <span>{product.price}€</span>
    <br/>
            <span>{product.stock} unidades</span>
  </Card>
        

    </div>)
}
export default ProductDetailFuncional;