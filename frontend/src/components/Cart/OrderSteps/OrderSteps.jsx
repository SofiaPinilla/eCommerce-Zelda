import React from 'react';
import 'antd/dist/antd.css';
import './OrderSteps.scss';
import { Steps, Button} from 'antd';
import { Link } from 'react-router-dom'

import Cart from '../Cart';
import OrderDetail  from '../OrderDetail/OrderDetail';
import CompleteOrder  from '../CompleteOrder/CompleteOrder';
import { ShoppingCartOutlined,SolutionOutlined  } from '@ant-design/icons';
import { order } from '../../../redux/actions/orders';
import { connect } from 'react-redux';

const { Step } = Steps;

const steps = [
  {
    title: <ShoppingCartOutlined className="carro"/>,
    content: <Cart/>,
  },
  {
    title: <SolutionOutlined className="carro"/>,
    content:   <OrderDetail/>,
  },
  {
    title: 'Done',
    content: <CompleteOrder/>,
  },
];

class OrderSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const orderita = this.props.products?.map(p => ({_id:p._id,units:p.units}))
    return (
      <div>
     
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Buy
            </Button>
          )}
          {current === steps.length -1 && (
            <Link to='/' > <Button type="primary" onClick={() =>  order(orderita)}>
            Finish checkout
            {console.log(orderita)}
          </Button></Link>
           
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.product?.cart });
export default connect(mapStateToProps)(OrderSteps)