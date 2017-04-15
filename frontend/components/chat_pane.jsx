import React from 'react';
import UserAvatarAndDescription from './user_avatar_and_description';
import Iphone from './iphone';

export default class ThreeUserDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='chat-pane-container'>
        <UserAvatarAndDescription
          imageURL={this.props.imageURL}
          username={this.props.username}
          location={this.props.location}
          role={this.props.role}
          />
        <Iphone gifUrl={this.props.gifUrl}/>
      </div>
    );
  }
}
