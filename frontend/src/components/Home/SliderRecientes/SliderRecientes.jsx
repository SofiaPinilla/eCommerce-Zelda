import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import './SliderRecientes.scss';
import { Card } from 'antd';
import { Carousel } from 'antd';
import { lastProducts } from '../../../redux/actions/products';
import { connect } from 'react-redux';
const { Meta } = Card;
const SliderRecientes = (props) => {
  useEffect(() => {
    lastProducts();
  }, [])

  console.log(props)
  if(!props.products) return 'cargando'
  return (

    <Carousel autoplay >

      <div >
        <div class="slider">
          <Card hoverable cover={<img alt="example" src={props.products[0].image_path} />}>
            <Meta title={props.products[0].name} description={props.products[0].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[1].image_path} />}>
            <Meta title={props.products[1].name} description={props.products[1].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[2].image_path} />}>
            <Meta title={props.products[2].name} description={props.products[2].price + '€'} />
          </Card>
        </div>
      </div>
      <div>
        <div class="slider">
          <Card hoverable cover={<img alt="example" src={props.products[3].image_path} />}>
            <Meta title={props.products[3].name} description={props.products[3].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[4].image_path} />}>
            <Meta title={props.products[4].name} description={props.products[4].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[5].image_path} />}>
            <Meta title={props.products[5].name} description={props.products[5].price + '€'} />
          </Card>
        </div>
      </div>
      <div>
        <div class="slider">
          <Card hoverable cover={<img alt="example" src={props.products[6].image_path} />}>
            <Meta title={props.products[6].name} description={props.products[6].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[7].image_path} />}>
            <Meta title={props.products[7].name} description={props.products[7].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[8].image_path} />}>
            <Meta title={props.products[8].name} description={props.products[8].price + '€'} />
          </Card>
        </div>
      </div>
      <div>
        <div class="slider">
          <Card hoverable cover={<img alt="example" src={props.products[9].image_path} />}>
            <Meta title={props.products[9].name} description={props.products[9].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[10].image_path} />}>
            <Meta title={props.products[10].name} description={props.products[10].price + '€'} />
          </Card>
          <Card hoverable cover={<img alt="example" src={props.products[11].image_path} />}>
            <Meta title={props.products[11].name} description={props.products[11].price + '€'} />
          </Card>
        </div>
      </div>
    </Carousel>

  )
}
const mapStateToProps = (state) => ({ products: state.lastProduct?.lastProduct });
export default connect(mapStateToProps)(SliderRecientes)