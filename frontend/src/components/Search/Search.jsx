import React, { useEffect} from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { productByName } from '../../redux/actions/products';
import {connect} from 'react-redux';
import './Search.scss'
const { Meta } = Card;
// import NavLink from './NavLink';

const Search = (props)=>{
    const productName = props.match.params.productName;
    useEffect(() => {
        productByName(productName)
    }, [productName])
    return (
        <div className="container">
 <div className="products">
            {props.products?.map((product) => (<div key={product._id} className="product">

                <Card
                    hoverable
                    cover={<img alt="example" src={product.image_path} />}
                >
                    <Meta title={product.name} description={product.price + '€'} />
                </Card>

            </div>))
            }
        </div>
        </div>
       


    )
}
const mapStateToProps = (state) => ({products:state.product.productByName});
export default connect(mapStateToProps)(Search)
