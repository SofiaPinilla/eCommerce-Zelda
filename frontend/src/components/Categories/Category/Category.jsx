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
            {props.categories?.map((category) =>       {
                 const image = "http://localhost:3002/images/user/products/" + category.image_path
                return(<div key={category._id} className="category">
                    <Link className="product" to={'/product/'+category._id}>
                    <Card
                            hoverable
                            cover={category.image_path?.includes('http') ?
                            <img src={category.image_path} alt="" /> : <img src={image} alt="" />
                          }
                        >
                            <Meta title={category.name} description={category.price + '€'} />
                        </Card></Link>
                        
        
                    </div>)
            }       

            )
            }
        </div>


    )
}
const mapStateToProps = (state) => ({categories:state.category.category});

export default connect(mapStateToProps)(Category)