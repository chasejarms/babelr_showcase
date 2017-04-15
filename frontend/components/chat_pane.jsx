import React from 'react';
import UserAvatarAndDescription from './user_avatar_and_description';
import Iphone from './iphone';

export default class ThreeUserDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className=''>
        <UserAvatarAndDescription imageUrl={this.props.imageUrl} description={this.props.description}/>
        <Iphone gifUrl={this.props.gifUrl}/>
      </div>
    );
  }
}
