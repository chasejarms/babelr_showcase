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
        <iframe src="https://appetize.io/embed/t7ty6h74aarp03j9h60g4me940?device=iphone6s&scale=75&orientation=portrait&osVersion=10.1&deviceColor=white"
          width="316px"
          height="655px"
          border-width='0px'
          frameborder="0"
          scrolling="no"></iframe>
      </div>
    );
  }
}
