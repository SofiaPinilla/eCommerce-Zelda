import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import { category } from '../../../redux/actions/products';
import './Category.scss'
import { Link } from 'react-router-dom';
const { Meta } = Card;

export const Category = (props) => {
    const categoryName = props.match.params.categoryName;
    useEffect(() => {
        category(categoryName);
    }, [categoryName])
    return (
        <div className="categories">
                <img className="separador" src="https://zelda.com/assets/img/home/hyrule_rule.png" alt=""/>  
            {props.categories?.map((category) => (<div key={category._id} className="category">
            <Link className="product" to={'/product/'+category._id}>
            <Card
                    hoverable
                    cover={<img alt="example" src={category.image_path} />}
                >
                    {console.log(category)}
                    <Meta title={category.name} description={category.price + '€'} />
                </Card></Link>
                

            </div>))
            }
        </div>


    )
}
const mapStateToProps = (state) => ({categories:state.category.category});

export default connect(mapStateToProps)(Category)