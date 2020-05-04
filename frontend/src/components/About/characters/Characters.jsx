import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {connect} from 'react-redux';
import './Characters.scss'
import { Modal, Button } from 'antd';
import { characters } from '../../../redux/actions/characters';

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();


function Characters(props) {
  const [modal, contextHolder] = Modal.useModal();
   
    useEffect(()=>{
        characters();
    },[])
    return (
        <div className="characters">
            { props.characters?.map(function(character) {
               const config = {
                title: character.name,
                content: (
                  <div className="modal">
                    <ReachableContext.Consumer>{name => `Description: ${character.description}!`}</ReachableContext.Consumer>
                    <br />
                    <UnreachableContext.Consumer>{name => `Meta: ${character.meta}!`}</UnreachableContext.Consumer>
                  </div>
                ),
              };
            return <div key={character._id} className="character">
              <Card hoverable cover={<img alt="example" src={character.image_path} />}>
</Card>
<ReachableContext.Provider value="Light">
      <Button
        onClick={() => {
          modal.info(config);
        }}
      >
        More
      </Button>

      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
            </div>
        })
    }
       
        </div>
    )
}


const mapStateToProps = (state) => ({characters:state.characters.character});
export default connect(mapStateToProps)(Characters)