import React from 'react'
import './Buscador2.scss'
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'

const { Search } = Input;
const Buscador2 = () => {
    const history = useHistory();//el history del BOM dopado
 
    function handleChange(e) {
      if(e.key==='Enter'){
          const productName =e.target.value;
          history.push('/search/'+productName);
      }
    }
    return (
        <div className="search">
             <h1>Search here your product!</h1>
         <Search  onKeyUp={handleChange} className="busca"
      placeholder="search product"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />

        </div>
    )
}

export default Buscador2