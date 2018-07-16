import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

  handleAction = function() {
    this.props.onClick();
  }

  render() {
    return (

      <a
      id='action'
      onClick={this.props.onClick}
      className='action'>
        { Icon('fas fa-plus-circle') }
        {/* fas fa-times-circle */}
      </a>

    )
  }
}

export default Action;
