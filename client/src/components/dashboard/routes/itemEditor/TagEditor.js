import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class TagEditor extends React.Component {
  constructor(props) {
    super(props);
    this.addTag = this.addTag.bind(this);
  }

  addTag() {
    this.props.tags.fields.push();
  }

  render() {
    console.log("this.props LOG", this.props);
    return (
      <div className="tagList">Tags
        <a href="#addTag" onClick={this.addTag}>
          <FontAwesome name="plus-circle" />
        </a>
      </div>
    );
  }
}
