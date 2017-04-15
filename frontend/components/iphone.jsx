import React from 'react';
// <img src={this.props.gifUrl}></img>

export default class Iphone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='iphone-outer'>
        <div className='iphone-top'>
          <div className='camera'></div>
          <div className='speaker'></div>
        </div>
        <div className='iphone-screen'>
        </div>
        <div className='iphone-bottom'>
          <div className='iphone-button'></div>
        </div>
      </div>
    );
  }
}
