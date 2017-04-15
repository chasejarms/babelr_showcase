import React from 'react';
import Scroll from 'react-scroll';
import ChatPane from './chat_pane';

const Element = Scroll.Element;

export default class ThreeUserDemo extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  scrollToBottom() {
    Scroll.animateScroll.scrollToBottom({
      duration: 500
    });
  }

  render() {
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
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Camila'
              location='Paraguay'
              role='Software Engineer'
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
            <ChatPane
              imageURL='https://facebook.github.io/react/img/logo_og.png'
              username='Abram'
              location='Russia'
              role='Graphic Designer'
              gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
          </div>
          <button className='pill-button' onClick={this.scrollToBottom}>Try It Live</button>
        </div>
      </div>
    );
  }
}
