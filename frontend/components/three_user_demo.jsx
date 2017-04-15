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
      showButton: false
    }
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showFirst && !this.state.showfirst) {
      setTimeout(() => {
        this.setState({ showSecond: false })
      }, 300);
    } else if (prevState.showSecond && !this.state.showSecond) {
      setTimeout(() => {
        this.setState({ showThird: false })
      }, 300);
    } else if (prevState.showThird && !this.state.showThird) {
      setTimeout(() => {
        this.setState({ showButton: true })
      }, 300);
    }
  }

  componentDidMount() {
    this.unveilPage();
  }

  scrollToBottom() {
    Scroll.animateScroll.scrollToBottom({
      duration: 500
    });
  }

  unveilPage() {
    setTimeout(() => {
      this.setState({ showFirst: false })
    }, 4000)
  }

  render() {
    const showButton = this.state.showButton ? 'visible' : 'hidden';
    return(
      <div>
        <Element name='threeUserDemo'></Element>
        <div className='full-screen three-user-demo-screen'>
          <div className='three-user-demo'>
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Tom'
              location='United States'
              role='Project Manager'
              infoClass={ this.state.showFirst ? 'visible' : 'hidden' }
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Camila'
              location='Paraguay'
              role='Software Engineer'
              infoClass={ this.state.showSecond ? 'visible' : 'hidden' }
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Abram'
              location='Russia'
              infoClass={ this.state.showThird ? 'visible' : 'hidden' }
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
