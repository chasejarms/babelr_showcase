import React from 'react';
import Scroll from 'react-scroll';
import Iphone from './iphone';

export default class LandingSection extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    Scroll.animateScroll.scrollToBottom({
      duration: 1000
    });
  }

  render() {
    return(
      <div className='full-screen landing-screen'>
        <div className='landing-info'>
          <div className='landing-info-container'>
            <h1>GLOBAL COMMUNICATION MADE SIMPLE</h1>
            <p>Babelr makes it easy for users to communicate by translating every message into the preferred language of the user.</p>
            <button>Scroll Down To See Demo</button>
          </div>
        </div>
        <div className='landing-iphone'>
          <Iphone />
        </div>
      </div>
    );
  }
}
