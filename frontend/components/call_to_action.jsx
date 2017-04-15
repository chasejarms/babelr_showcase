import React from 'react';
import Scroll from 'react-scroll';

export default class CallToAction extends React.Component {
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
      <div className='full-screen call-to-action'>
      </div>
    );
  }
}
