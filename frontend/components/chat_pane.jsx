import React from 'react';
import UserAvatarAndDescription from './user_avatar_and_description';
import Iphone from './iphone';
import VisibilitySensor from 'react-visibility-sensor';

export default class ThreeUserDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageURL, username, location, role, visible, iphoneScreenClass, videoURL } = this.props;
    const unveilPage = this.props.unveilPage ?  <VisibilitySensor onChange={this.props.unveilPage}/> : undefined;
    return(
      <div className='chat-pane-container'>
        <UserAvatarAndDescription
          imageURL={imageURL}
          username={username}
          location={location}
          role={role}
          visible={visible}
          />
        { unveilPage }
        <Iphone
          iphoneScreenClass={iphoneScreenClass}
          videoURL={videoURL}
          />
      </div>
    );
  }
}
