import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import './ProductDetail.scss';
export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get('http://localhost:3002/products' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
    }
    render() {
        return (
            <div className="product">
                <p>{this.state.product.name}</p>
                    {/* <img src={this.state.product.image_path} alt="" />
                    <div className="detail">
                        <span>{this.state.product.price}€</span>
                        <span>{this.state.product.stock} unidades</span>
                        <span>{this.state.product.name}</span>
                        <span>{this.state.product.description}</span>
                    </div> */}
            </div>
        )
    }
}