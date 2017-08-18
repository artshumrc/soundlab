import React from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import CoverImageUploader from '../../components/imagesUploader/CoverImageUploader';
import Form from '../../components/Form';
import './CollectionEditor.css';

export default class CollectionEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {
    const inputComponent = props => (<input
      {...props.input}
      placeholder={props.placeholder}
      className={props.className}
      autoFocus
    />);
    const textComponent = props => (<Textarea
      {...props.input}
      placeholder={props.placeholder}
      className={props.className}
    />);
    return (
      <div className="collectionEditor">
        <Form
          onSubmit={this.handleSubmit}
          form="itemEditor"
          initialValues={this.state}
        >
          <CoverImageUploader />
          <Field
            name="title"
            component={inputComponent}
            type="text"
            placeholder="Title..."
            className="collectionTitleEdit"
          />
          <div className="center">
            <Field
              name="article"
              component={textComponent}
              type="text"
              placeholder="Article..."
              className="collectionArticleEdit"
            />
          </div>
        </Form>
      </div>
    );
  }
}
