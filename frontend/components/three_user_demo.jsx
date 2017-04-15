import React from 'react';
import Scroll from 'react-scroll';
import ChatPane from './chat_pane';

export default class ThreeUserDemo extends React.Component {
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
      <div className='full-screen three-user-demo'>
        <ChatPane
          imageUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737'
          description='Tom is a US based project manager. He stays in constant communication with Abram (Russia) and Camila (Paraguay)'
          gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
        <ChatPane
          imageUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737'
          description='Tom is a US based project manager. He stays in constant communication with Abram (Russia) and Camila (Paraguay)'
          gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
        <ChatPane
          imageUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737'
          description='Tom is a US based project manager. He stays in constant communication with Abram (Russia) and Camila (Paraguay)'
          gifUrl='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj29cm5kKXTAhXHqFQKHQ3bB-0QjRwIBw&url=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F38278294%2Freact-unexpected-behavior-possibly-caused-by-passing-functions-as-props&psig=AFQjCNFoE_Gq-Wn6Qzc6FFeXjiih0zUo8Q&ust=1492299891762737' />
      </div>
    );
  }
}