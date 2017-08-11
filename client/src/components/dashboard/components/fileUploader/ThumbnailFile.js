import React from 'react';

export default class ThumbnailFile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        className="thumbnailImage"
        alt={this.props.alt}
        src={this.props.src}
      />
    )
  }
}
