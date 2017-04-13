import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import InteractiveSidebar from './interactive_sidebar/interactive_sidebar';
import LiveComponentsWithCode from './live_components_with_code/live_components_with_code';
import LandingPage from './landing_page/landing_page';
import InstructionsPage from './instructions_page/instructions_page';
import {lightBlue500, blue600, lightBlue400, deepPurple300, deepPurple500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar'
//
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//

const muiTheme = getMuiTheme({
  palette: {
    primary1Color:  '#f73057',
    primary2Color: blue600,
    primary3Color: lightBlue400,
    accent1Color: deepPurple300,
    accent2Color: deepPurple500,
    greyOne: '#1D1D24',
    greyTwo: '#13131f',
    greyThree: '#0C0C1A',
    greyFour: '#060613'
  }
});

const appBarStyle = {
  position: 'fixed'
}


class App extends React.Component {
  constructor(store) {
    super(store);
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="swipable">
            <AppBar className='app-bar' style={appBarStyle}/>
            <LandingPage />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
