import React from 'react';
import Scroll from 'react-scroll';
import ChatPane from './chat_pane';
import VisibilitySensor from 'react-visibility-sensor';

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
        this.setState({ showFirst: false, sensorVisible: true });
      }, 4000);
      setTimeout(() => {
        this.setState({ showSecond: false, showButton: true })
      }, 4300);
      setTimeout(() => {
        this.setState({ showThird: false })
      }, 4600);
      // setTimeout(() => {
      //   this.setState({ showButton: true })
      // }, 4900);
    }
  }

  render() {
    const showButton = this.state.showButton ? 'visible' : '';
    const { showFirst, showSecond, showThird } = this.state;
    return(
      <div>
        <Element name='threeUserDemo'></Element>
        <div className='full-screen three-user-demo-screen'>
          <div className='three-user-demo'>
            <VisibilitySensor onChange={this.unveilPage}/>
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Tom'
              location='United States'
              role='Project Manager'
              visible={showFirst}
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Camila'
              location='Paraguay'
              role='Software Engineer'
              visible={showSecond}
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Abram'
              location='Russia'
              visible={showThird}
              role='Graphic Designer'
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
          </div>
          <div className={`see-live-demo-container ${showButton}`}>
            <button className='pill-button' onClick={this.scrollToBottom}>Try It Live</button>
          </div>
        </div>
      </div>
    );
  }
}
