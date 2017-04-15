import React from 'react';

export default class UserAvatarAndDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img
          className='avatar-image'
          src={ this.props.imageUrl }
          />
        <p>{ this.props.description }</p>
      </div>
    );
  }
}
