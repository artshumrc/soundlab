import React from 'react';
import {Field} from 'redux-form';
import TextInput from '../../components/TextInput';
import './ThumbnailFile.css';
import {SortableHandle} from 'react-sortable-hoc';
import FontAwesome from 'react-fontawesome';

export default class ThumbnailFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false
    };
    this.toggleTitleInput = this.toggleTitleInput.bind(this);
  }

  inputComponent(props) {
    return <TextInput {...props} />;
  }

  toggleTitleInput() {
    this.setState({
      showTitle: !this.state.showTitle
    });
  }

  render() {
    const displayTitle = this.state.showTitle ? '' : 'titleHide';
    const DragHandle = SortableHandle(() => <div className="moveButton"><FontAwesome name="bars" /></div>); // This can be any component you want

    return (
      <div className="singleImage" onClick={this.toggleTitleInput}>
        <DragHandle />
          <img
            className="thumbnailImage"
            alt={this.props.file.title}
            src={`//iiif.orphe.us/orpheus/art/${this.props.file.fileName}/square/90,/0/default.jpg`}
          />
          {/*<Field*/}
            {/*name={`files[${this.props.fileIndex}].title`} component={this.inputComponent} type="text"*/}
            {/*placeholder="Image label..." value={this.props.file.title}*/}
          {/*/>*/}
      </div>
    )
  }
}
