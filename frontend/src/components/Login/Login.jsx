import React from 'react';
import 'antd/dist/antd.css';
import './Login.scss'
// import './index.css';
import { notification } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from '../../redux/actions/user';
import { Link } from 'react-router-dom';


export default function Login(props) {
    const onFinish = user => {
      login(user)
    setTimeout(() => {
        props.history.push('/profile')
    }, 2000);
 
}
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
             <h1 >Login</h1>
          <Form.Item
            label="Username"
            name="nombre"
            rules={[
              {
                required: true,
                message: 'Please input your name',
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
          <span className="redirección">Still without an account?  <Link to='register'>Register</Link></span>
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


