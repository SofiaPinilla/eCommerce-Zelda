import React from 'react';
import 'antd/dist/antd.css';
import './OrderSteps.scss';
import { Steps, Button, message } from 'antd';
import Cart from '../Cart';
import OrderDetail  from '../OrderDetail/OrderDetail';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <Cart/>,
  },
  {
    title: 'Second',
    content:   <OrderDetail/>,
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

export default class OrderSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
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
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
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

