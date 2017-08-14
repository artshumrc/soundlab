import React from 'react';
import _ from 'underscore';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import FileUploader from './FileUploader';
import ThumbnailFile from './ThumbnailFile';

export default class ItemEditorUploader extends React.Component {
  constructor(props) {
    super(props);
    this.addFile = this.addFile.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.moveField = this.moveField.bind(this);
    this.state = {
      files: this.props.files.fields.getAll()
    };
  }

  addFile(file) {
    this.props.files.fields.push(file);
  }

  updateFile(index, file) {
    this.props.files.fields.remove(index);
    this.props.files.fields.insert(index, file);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      files: nextProps.files.fields.getAll()
    })
  }

  moveField({oldIndex, newIndex}) {
    const newFilesState = arrayMove(this.state.files, oldIndex, newIndex);
    this.setState({
      files: newFilesState
    });
    this.props.files.changeValue("files", newFilesState);
  }

  render() {
    const files = this.state.files;
    return (
      <div>
        <div className="thumbnailImages">
          <SortableList
            files={files}
            onSortEnd={this.moveField}
            updateFile={this.updateFile}
            showError={this.props.showError}
            axis="xy"
            useDragHandle
          />
        </div>
        <FileUploader addFile={this.addFile} />
      </div>
    )
  }
}
const generateKey = () => Math.random().toString(36).substring(2);
const SortableItem = SortableElement(({file, fileIndex, removeFile, updateFileCb, showError}) =>
  (<ThumbnailFile
    file={file}
    fileIndex={fileIndex}
    key={generateKey()}
    updateFileCb={updateFileCb}
    deleteFile={removeFile}
    showError={showError}
  />)
);

const SortableList = SortableContainer(({files, updateFile, showError}) => (
  <div>
    {files.map((file, index) => (<SortableItem
        file={file}
        index={index}
        fileIndex={index}
        key={generateKey()}
        updateFileCb={updateFile}
        removeFile={() => {
          files.fields.remove(index);
        }}
        showError={showError}
      />
    ))}
  </div>
));