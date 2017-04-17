import React from 'react';
import Scroll from 'react-scroll';
import ChatPane from './chat_pane';

const Element = Scroll.Element;

export default class ThreeUserDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirst: true,
      showSecond: true,
      showThird: true,
      showButton: false,
      sensorVisible: false
    }
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.unveilPage = this.unveilPage.bind(this);
  }

  scrollToBottom() {
    Scroll.animateScroll.scrollToBottom({
      duration: 500
    });
  }

  unveilPage(isVisible) {
    if (isVisible && !this.state.sensorVisible) {
      setTimeout(() => {
        document.getElementById('chat-one').play();
        document.getElementById('chat-two').play();
        document.getElementById('chat-three').play();
      }, 500);
      setTimeout(() => {
        this.setState({ showFirst: false, sensorVisible: true });
      }, 6000);
      setTimeout(() => {
        this.setState({ showSecond: false, showButton: true })
      }, 6300);
      setTimeout(() => {
        this.setState({ showThird: false })
      }, 6600);
    }
  }

  render() {
    const showButton = this.state.showButton ? 'visible' : '';
    const { showFirst, showSecond, showThird } = this.state;
    const black = { color: '#151515' };
    return(
      <div>
        <Element name='threeUserDemo'></Element>
        <div className='full-screen three-user-demo-screen'>
          <div className='three-user-demo'>
            <ChatPane
              unveilPage={this.unveilPage}
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Tom'
              location='United States'
              role='Project Manager'
              visible={showFirst}
              videoURL='https://s3-us-west-1.amazonaws.com/babelr/demo_page/videos/tom_chat.mov'
              bandaid='bandaid-class'
              classId='chat-one'
              color={black} />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Camila'
              location='Paraguay'
              role='Software Engineer'
              visible={showSecond}
              videoURL='https://s3-us-west-1.amazonaws.com/babelr/demo_page/videos/camila_chat.mov'
              classId='chat-two'
              color={black} />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Abram'
              location='Russia'
              visible={showThird}
              role='Graphic Designer'
              videoURL='https://s3-us-west-1.amazonaws.com/babelr/demo_page/videos/abram_chat.mov'
              classId='chat-three'
              color={black} />
          </div>
          <div className={`see-live-demo-container ${showButton}`}>
            <button className='pill-button' onClick={this.scrollToBottom}>TRY IT LIVE</button>
          </div>
        </div>
      </div>
    );
  }
}
