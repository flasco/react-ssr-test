import React from 'react';
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/index.css';
import Button from 'antd-mobile/lib/button';
import 'antd-mobile/lib/button/style/index.css';
import { connect } from 'react-redux';

import { setInfo } from '../../../models/actions'

class FirstView extends React.PureComponent {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  setInfo = () => {
    this.props.dispatch(setInfo({
      text: '这里是一条测试的语句！'
    }));
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite>
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <p>{`info= ${this.props.info}`}</p>
        <Button onClick={this.setInfo} type={'primary'}>测试</Button>
      </div>
    )
  }
}

function select(state) {
  return {
    info: state.info.text
  }
}

export default connect(select)(FirstView);