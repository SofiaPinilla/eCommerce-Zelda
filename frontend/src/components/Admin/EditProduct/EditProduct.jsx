import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
import {  editProduct } from '../../../redux/actions/products';
import {connect} from 'react-redux';
import { Modal, Button, Space } from 'antd';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import { notification } from 'antd';


 const EditProduct = (props) => {
    const [modal, contextHolder] = Modal.useModal();
    let _id =props?.products?.map(product => product._id)
    
    const handle = (event) => {
      event.preventDefault();
      const formData = new FormData();
      if (event.target.imageProduct.files[0]) formData.set('imageProduct', event.target.imageProduct.files[0]);
      formData.set('name', event.target.name.value)
      formData.set('description', event.target.description.value)
      formData.set('price', event.target.price.value)
      formData.set('stock', event.target.stock.value)
      
  editProduct(_id,formData)
      //   .then(res => {
      //     notification.success({message:'Product successfully uploaded '})
      // })
      // .catch((error)=>{
      //    console.error(error)
      // })
      console.log(_id)
  }
  
  const config = {
      title: 'Use Hook!',
      content: (
        <div>
           
           <form action="" onSubmit={handle}>
                    <Input name="name" placeholder="add name" />
                    <Input name="description" placeholder="add description" />
                   
                    <input type="file" name="imageProduct" id="file" class="input-file"/>
    <label for="file" class="btn btn-tertiary js-labelFile">
      <i class="icon fa fa-check"></i>
      <span class="js-fileName">Choose a file</span>
    </label> 
    <InputNumber name="price" size="large" min={1} max={100000} defaultValue={3}  />
    <InputNumber name="stock" size="large" min={1} max={100000} defaultValue={3}  />
  
    <Button type="primary" >
                    <input className="input" type="submit" value="create product" />
          </Button>
                    </form>
        </div>
      ),
    };

    return (
        <div>
      <Space>
        
        <Button
          onClick={() => {
            modal.info(config);
          }}
        >
          Edit
        </Button>
       
      </Space>
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
  
        </div>
    )
}
const mapStateToProps = (state) => ({products:state.product?.product});
export default connect(mapStateToProps)(EditProduct)

