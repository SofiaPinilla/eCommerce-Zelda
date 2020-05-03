import React from 'react';
import 'antd/dist/antd.css';
import './Login.scss'
// import './index.css';
import { notification } from 'antd';
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';


export default function Login(props) {
  
    const onFinish = user => {
      axios.post('http://localhost:3002/users/login', user)
      // const authToken = res.data.user?.token
      .then(res => {
          notification.success({ message: 'Conectad@ con éxito', description: 'Hola ' + res.data.message })
          
          localStorage.setItem('authToken',res.data.token)
          
          setTimeout(() => {
              props.history.push('/')
          }, 2000);
      })      
      .catch(err =>{
          notification.error({ message: 'Conexión fallida', description: 'Nombre o contraseña incorrectos'})
          setTimeout(() => {
              props.history.push('/login');
              console.error(err)})
          }, 2000);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="login">
           
        <Form className="form"{...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
             <h1 >Iniciar Sesión</h1>
          <Form.Item
            label="Username"
            name="nombre"
            rules={[
              {
                required: true,
                message: 'Please input your nombre!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


