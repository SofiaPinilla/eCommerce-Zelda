import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import { characters } from '../../../redux/actions/characters';import { characters } from '../../../redux/actions/characters';

export const modalCharacter = () => {
    state = { visible: false };

    showModal = () => {
      setState({
        visible: true,
      });
    };

    handleOk = e => {
    
      setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
    
      setState({
        visible: false,
      });
    };
  
    useEffect(()=>{
        characters();
    },[])
      return (
        <div>
            {props.characters?.map(function(character) {
            return <div key={character._id} className="character">
              <Card hoverable cover={<img alt="example" src={character.image_path} />}>
</Card>
            </div>
        })}
      
        </div>
      );
 
}



const mapStateToProps = (state) => ({characters:state.characters.character});
export default connect(mapStateToProps)(modalCharacter)