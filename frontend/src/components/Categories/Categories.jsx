import React, {useEffect} from 'react'
import 'antd/dist/antd.css';
// import { Card } from 'antd';
import {connect} from 'react-redux';
import './Categories.scss'
// const { Meta } = Card;
import { categories } from '../../redux/actions/products';
const Categories = (props) => {  
    useEffect(()=>{
        categories();
    },[])

    return (
        <div class="categories">   
            
        { props.categories.map(function(category) {
                return <div class="category"> 
                <p>{category.name}</p>
                </div>
            })
        }
        </div>     
    )
}

const mapStateToProps = (state) => ({categories:state.categories.product});
export default connect(mapStateToProps)(Categories)
