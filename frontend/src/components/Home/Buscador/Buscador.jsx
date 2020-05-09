import React from 'react'
import link from './buscazelda.png'
import './Buscador.scss'
import { Input } from 'antd';

const { Search } = Input;
const Buscador = () => {
    return (
        <div class="imagenInicio">
         <img src={link} alt=""/>   
        </div>
    )
}

export default Buscador