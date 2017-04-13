import React from 'react';
import Scroll from 'react-scroll';

class InstructionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.state = {
      firstInstruction: false,
      secondInstruction: false,
      thirdInstruction: false,
      fourthInstruction: false
    }
  }

  scrollToBottom () {
    Scroll.animateScroll.scrollToBottom({
      duration: 1000
    });
  }

  render() {
    return(
      <div className='instruction-page'>
        <div className='four-columns grey-one'></div>
        <div className='four-columns grey-two'></div>
        <div className='four-columns grey-three'></div>
        <div className='four-columns grey-four'></div>
      </div>
    );
  }

}

export default InstructionsPage;


// <div className="down-arrow-container">
//   <i
//     className="fa fa-chevron-down landing-down-arrow"
//     onClick={this.scrollToBottom}
//     ></i>
// </div>
