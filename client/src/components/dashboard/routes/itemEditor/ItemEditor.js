import React from 'react';
import ItemEditorUploader from '../../components/fileUploader/ItemEditorUploader';
import PrimaryImage from '../../../items/ItemImageViewer/PrimaryImage';
import _ from 'underscore';
import {Field, FieldArray} from 'redux-form';
import Form from '../../components/Form';


export default class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [{title: 'Image title', url: '//iiif.orphe.us/orpheus/art/48.jpg/full/600,/0/default.jpg', fileName: '48.jpg'},
        {title: 'Image title', url: '//iiif.orphe.us/orpheus/art/48.jpg/full/600,/0/default.jpg', fileName: '16.jpg'}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
  }

  handleSubmit(values) {
    console.log("values LOG", values);
  }

  showError(error) {
    console.error(error);
  }

  render() {
    return (
      <div className="content">
        <div className="itemImageViewer">
          <Form
            onSubmit={this.handleSubmit} form="itemEditor" initialValues={this.state}
          >
            <PrimaryImage alt={this.state.files[0].title} src={this.state.files[0].url} />
            <FieldArray
              name="files"
              component={files => (
                <ItemEditorUploader files={files} showError={this.showError} />
              )}
            />
          </Form>
        </div>
      </div>
    )
  }
}
