import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const active = this.props.active ? 'active' : '';
    return (
      <a href="#">
        <li className={active}>
          <FontAwesome name={this.props.fa}/> {this.props.name}
        </li>
      </a>
    );
  }
}
