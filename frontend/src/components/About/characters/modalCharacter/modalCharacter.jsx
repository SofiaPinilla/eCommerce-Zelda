import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Modal, Button } from 'antd';


export const modalCharacter = () => {
    state = { visible: false };

    showModal = () => {
      setState({
        visible: true,
      });
    };

    handleOk = e => {
      console.log(e);
      setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      setState({
        visible: false,
      });
    };
  

      return (
        <div>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={state.visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      );
 
}


ReactDOM.render(<App />, document.getElementById('container'));