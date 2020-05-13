import React from 'react';
import './UserForm.scss'
import 'antd/dist/antd.css';
import { notification } from 'antd';
import {Form,Input,Tooltip,Button} from 'antd';
import { register } from '../../redux/actions/user';
import { Link } from 'react-router-dom';

// const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const UserForm = (props) => {
    
    // const registrar = (event) => {
      

    // }
  const [form] = Form.useForm();

  const onFinish = (user) => {
    if (user.password !== user.confirm) {
        return notification.error({ message: 'Error', description: 'Passwords do not match' })
    }
   
    register(user)
        .then(res => {
            notification.success({ message: 'Welcome ', description: 'Succesfully registered'})
            setTimeout(() => props.history.push('/login') , 2000);
        })
        .catch(err => console.error(err))
  }



  return (
    <div className="register">
    <Form className="form" {...formItemLayout} form={form} name="register" onFinish={onFinish}  scrollToFirstError>
    <h1 >Register</h1>
      <Form.Item name="email" label="Correo"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Contraseña" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback >
        <Input.Password />
      </Form.Item>

      <Form.Item name="confirm"  label="Confirm Password"  dependencies={['password']}  hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="nombre"
        label={
          <span>
            Name&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="apellidos"
        label={
          <span>
            Surname&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your surname',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="DNI"
        label={
          <span>
            DNI&nbsp;
            <Tooltip title="What do you want others to call you?"></Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your DNI',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

    
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <span className="redirección">Already an account?  <Link to='register'>Log in</Link></span>
    </Form>
    </div>
  );
};
export default UserForm;
