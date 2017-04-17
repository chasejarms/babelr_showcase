import React from 'react';

export default class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.createVideo = this.createVideo.bind(this);
  }

  createVideo() {
    if (this.props.videoURL) {
      return (
        <video
          className='iphone-video'
          autoplay='true'
          preload='auto'
          src={this.props.videoURL}>
        </video>
      )
    } else {
      return undefined;
    }
  }

  render() {
    return(
      <div className='iphone-outer'>
        <div className='iphone-top'>
          <div className='camera'></div>
          <div className='speaker'></div>
        </div>
        <div className={`iphone-screen ${this.props.iphoneScreenClass}`}>
          { this.createVideo() }
        </div>
        <div className='iphone-bottom'>
          <div className='iphone-button'></div>
        </div>
      </div>
    );
  }
}
