import React, {useEffect,useState} from 'react'
import 'antd/dist/antd.css';
// import { Card } from 'antd';
import axios from 'axios';
import './Categories.scss'
// const { Meta } = Card;

const Categories = () => {
    const [categories,setCategories] =useState([]);
 const getCategories = () => {
        axios.get('http://localhost:3002/categories/')
        .then(res => {
            const categories = res.data;
            setCategories( categories );
          }).catch(err => console.error(err))
    }
    useEffect(()=>{
        getCategories();
    },[])
    // console.log(categories)
    return (
        <div class="categories">
           
        { categories.map(function(category) {
                    console.log(category.Products)
                return <div class="category"> 
                <p>{category.name}</p>
                </div>
            })
        }
        </div>
            
       
    )
   
}

export default Categories;