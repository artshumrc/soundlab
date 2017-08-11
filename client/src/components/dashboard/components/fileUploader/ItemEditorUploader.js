import React from 'react';
import _ from 'underscore';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import FileUploader from './FileUploader';
import ThumbnailFile from './ThumbnailFile';

export default class ItemEditorUploader extends React.Component {
  constructor(props) {
    super(props);
    this.addFile = this.addFile.bind(this);
  }
  addFile() {

  }
  render() {
    console.log("this.props LOG", this.props.files.fields.getAll());
    const files = this.props.files.fields.getAll();
    return (
      <div>
        <div className="thumbnailImages">
          {files.map((image, i) => {
            return (
              <ThumbnailFile
                alt={image.title}
                src={`//iiif.orphe.us/orpheus/art/${image.fileName}/square/90,/0/default.jpg`}
              />
            );
          })}
        </div>
        <FileUploader addFile={this.addFile} />
      </div>
    )
  }
}
