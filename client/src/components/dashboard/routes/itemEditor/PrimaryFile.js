import React from 'react';
import FontAwesome from 'react-fontawesome';
import './PrimaryFile.css';

export default class PrimaryFile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.file.path} target="_blank">
        <div className="primaryFile">
          <FontAwesome name="file-o" size="2x" />
        </div>
      </a>
    );
  }
}
