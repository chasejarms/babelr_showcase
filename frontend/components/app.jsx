import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import LandingSection from './landing_section';
import ThreeUserDemo from './three_user_demo';
import CallToAction from './call_to_action';


class App extends React.Component {
  constructor(store) {
    super(store);
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className='site-container'>
          <LandingSection />
          <ThreeUserDemo />
          <CallToAction />
        </div>
      </Provider>
    );
  }
}

export default App;
