import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import './Characters.scss'
import { characters } from '../../../redux/actions/characters';



function About(props) {
    useEffect(()=>{
        characters();
    },[])
    return (
        <div className="characters">
            { props.characters?.map(function(character) {
            return <div key={character._id} className="character">
              <Card hoverable cover={<img alt="example" src={character.image_path} />}>
</Card>
            </div>
        })
    }
        </div>
    )
}


const mapStateToProps = (state) => ({characters:state.characters.character});
export default connect(mapStateToProps)(About)