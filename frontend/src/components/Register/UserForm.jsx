import React from 'react';
import './UserForm.scss'
import 'antd/dist/antd.css';
import { notification } from 'antd';
import axios from 'axios'
import {Form,Input,Tooltip,Button} from 'antd';

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
      console.log(user)
    if (user.password !== user.confirm) {
        return notification.error({ message: 'Error', description: 'Las contraseñas no coinciden' })
    }
   
    axios.post('http://localhost:3002/users/register', user)
        .then(res => {
            notification.success({ message: 'Bienvenid@ ', description: 'Ya estas registrado '})
            setTimeout(() => props.history.push('/login') , 2000);
        })
        .catch(err => console.error(err))
  }



  return (
    <div className="register">
    <Form className="form" {...formItemLayout} form={form} name="register" onFinish={onFinish}  scrollToFirstError>
    <h1 >Registro</h1>
      <Form.Item name="email" label="Correo"
        rules={[
          {
            type: 'email',
            message: 'El correo escrito no es válido',
          },
          {
            required: true,
            message: 'Por favor introduce tu correo',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Contraseña" rules={[
          {
            required: true,
            message: 'Por favor introduce tu contraseña',
          },
        ]}
        hasFeedback >
        <Input.Password />
      </Form.Item>

      <Form.Item name="confirm"  label="Confirmar contraseña"  dependencies={['password']}  hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirma tu contraseña',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('Las contraseñas no coinciden');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="nombre"
        label={
          <span>
            Nombre&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Por favor introduzca su nombre!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="apellidos"
        label={
          <span>
            Apellidos&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Por favor introduce tus apellidos!',
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
            message: 'Por favor introduce tu DNI',
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
    </Form>
    </div>
  );
};
export default UserForm;
