import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import { category } from '../../../redux/actions/products';
import './Category.scss'
const { Meta } = Card;

export const Category = (props) => {
    const categoryName = props.match.params.categoryName;
    useEffect(() => {
        category(categoryName);
    }, [categoryName])
    return (
        <div className="categories">
            {props.categories?.map((category) => (<div key={category._id} className="category">
                <Card
                    hoverable
                    cover={<img alt="example" src={category.image_path} />}
                >
                    <Meta title={category.name} description={category.price + '€'} />
                </Card>

            </div>))
            }
        </div>


    )
}
const mapStateToProps = (state) => ({categories:state.category.category});

export default connect(mapStateToProps)(Category)