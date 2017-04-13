import React from 'react';
import Scroll from 'react-scroll';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const landingPage = {
  fullPage: {
    height: '100vh',
    width: '100vw',
    backgroundColor: MuiThemeProvider.primaryTwo
  },
  h1: {

  },
  h3: {

  }
}

class LandingPage extends React.Component {
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
      <div>
        <div style={landingPage.fullPage}>
          <div>
            <div>
              <h1>BABELR MAKES INTERNATIONAL TEAMS EFFICIENT</h1>
            </div>
            <div>
              <h3>BY DOING THE TRANSLATION FOR YOU</h3><span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
