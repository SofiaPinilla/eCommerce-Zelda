import React, { useEffect, useState } from 'react'

import 'antd/dist/antd.css';
import { Card } from 'antd';
import axios from 'axios';
import './Category.scss'
const { Meta } = Card;

export const Category = props => {
    const [Products, setProducts] = useState([]);
    const categoryName = props.match.params.categoryName;
    const getCategory = (categoryName) => {
        axios.get('http://localhost:3002/categories/name/' + categoryName)
            .then(res => {
                const products = res.data.ProductId;
                console.log(products)
                setProducts(products);
            }).catch(err => console.error(err))
    }
    useEffect(() => {
        getCategory(categoryName);
    }, [categoryName])
    // console.log(categories)
    return (
        <div className="categories">
            {Products.map((product) => (<div className="product">
                <Card
                    hoverable
                    cover={<img alt="example" src={product.image_path} />}
                >
                    <Meta title={product.name} description={product.price + '€'} />
                </Card>

            </div>))
            }
        </div>


    )
}
export default Category;