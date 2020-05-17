import React, { useState } from 'react'
import './Admin.scss'
import { addProduct, deleteProduct, editProduct } from '../../redux/actions/products';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import { notification } from 'antd';
import { Modal, Button, Space } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
const Admin = (props) => {
  const [modal, contextHolder] = Modal.useModal();
  const [categoryId, setCategoryId] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    if (event.target.imageProduct.files[0]) formData.set('imageProduct', event.target.imageProduct.files[0]);
    formData.set('name', event.target.name.value)
    formData.set('description', event.target.description.value)
    formData.set('price', event.target.price.value)
    formData.set('stock', event.target.stock.value)
    formData.set('CategoryId', categoryId)

    addProduct(formData)
      .then(res => {
        notification.success({ message: 'Product successfully uploaded ' })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>

      <h1>Create product</h1>
      <div className="createProduct">

        <form className="formProduct"action="" onSubmit={handleSubmit}>
          <Input name="name" placeholder="add name" />
          <Input name="description" placeholder="add description" />

          <input type="file" name="imageProduct" id="file" class="input-file" />
          <label for="file" class="btn btn-tertiary js-labelFile">
            <i class="icon fa fa-check"></i>
            <span class="js-fileName">Choose a file</span>
          </label>
          <p>Price:    <InputNumber name="price" size="large" min={1} max={100000} defaultValue={3} /> €</p>
          <p>Stock:  <InputNumber name="stock" size="large" min={1} max={100000} defaultValue={3} /></p>
<p>  Choose a category : 
  <Select defaultValue="5ead8df3174cc9ac477107dc" name="CategoryId" 
          value={categoryId}
          onChange={(value)=>setCategoryId(value)}
           style={{ width: 120 }} >
            <Option value="5ead8df3174cc9ac477107dc">Consolas</Option>
            <Option value="5eade05416254837a87e3a42">Videojuegos</Option>
            <Option value="5eade2fc77310d35442d86cc">Amiibos</Option>
          </Select>
          </p>
          <Button type="primary" >
            <input className="input" type="submit" value="Create product" />
          </Button>
        </form>
      </div>
      {console.log(props.products)}
      {props.products?.map(product => {
        const image = "http://localhost:3002/images/user/products/" + product.image_path
        const handle2 = (event) => {
          event.preventDefault();
          const formData = new FormData();
          if (event.target.imageProduct.files[0]) formData.set('imageProduct', event.target.imageProduct.files[0]);
          formData.set('name', event.target.name.value)
          formData.set('description', event.target.description.value)
          formData.set('price', event.target.price.value)
          formData.set('stock', event.target.stock.value)

          editProduct(product._id, formData)
            .then(res => {
              notification.success({message:'Product successfully updated '})
          })
          .catch((error)=>{
             console.error(error)
          })
          console.log(product._id)
        }
        const config = {
          title: 'Edit your product!',
          content: (
            <div>
              <form action="" onSubmit={handle2}>
                <Input name="name" placeholder="add name" />
                <Input name="description" placeholder="add description" />
<input type="file" name="imageProduct"/>
                 <p>Price:    <InputNumber name="price" size="large" min={1} max={100000} defaultValue={3} /> €</p>
                <p>Stock:  <InputNumber name="stock" size="large" min={1} max={100000} defaultValue={3} /></p>
                <Button type="primary" >
                  <input className="input" type="submit" value="Edit product" />
                </Button>
              </form>
            </div>
          ),
        };
        return (
    
          <div className="productsAdmin">
 
            <div className="productAdmin">
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price} €</p>
              <p>Stock: {product.stock} units</p>
              {product.image_path?.includes('http') ?
                <img src={product.image_path} alt="" /> : <img src={image} alt="" />
              }
              <Space>
                <Button
                  onClick={() => {
                    modal.info(config);
                  }}
                >
                  Edit product
        </Button>
        <Button type="primary" onClick={() => deleteProduct(product._id)} danger>Delete product</Button>
              </Space>
              {contextHolder}
            </div>

          </div>

        )
      })}


    </div>
  )
}

export default connect((state) => ({ products: state.product?.product, user: state.user.user }))(Admin);