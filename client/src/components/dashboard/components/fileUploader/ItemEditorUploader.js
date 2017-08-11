import React from 'react';
import FileUploader from './FileUploader';

export default class ItemEditorUploader extends React.Component {
  constructor(props) {
    super(props);
    this.addFile = this.addFile.bind(this);
  }
  addFile() {

  }
  render() {
    return (
      <div>
        ItemEditorUploader
        <FileUploader addFile={this.addFile}/>
      </div>
    )
  }
}
