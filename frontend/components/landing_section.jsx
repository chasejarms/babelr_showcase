import React from 'react';
import Scroll from 'react-scroll';
import Iphone from './iphone';

const scroller = Scroll.scroller;

export default class LandingSection extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToDemo = this.scrollToDemo.bind(this);
  }

  scrollToDemo() {
    scroller.scrollTo('threeUserDemo', {
      duration: 500,
      smooth: true
    });
  }

  render() {
    return(
      <div className='full-screen landing-screen'>
        <div className='landing-info'>
          <div className='landing-info-container'>
            <h1>GLOBAL COMMUNICATION <span>MADE SIMPLE</span></h1>
            <h3>Babelr makes it easy for international teams to communicate, allowing users to send and receive messages in their preferred language.</h3>
            <button className='pill-button' onClick={this.scrollToDemo}>View Demo</button>
          </div>
        </div>
        <div className='landing-iphone'>
          <Iphone />
        </div>
      </div>
    );
  }
}
