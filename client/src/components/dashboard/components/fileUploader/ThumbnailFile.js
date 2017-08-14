import React from 'react';
import {Field} from 'redux-form';
import TextInput from '../../components/TextInput';
import './ThumbnailFile.css';
import {SortableHandle} from 'react-sortable-hoc';
import FontAwesome from 'react-fontawesome';
import S3Upload from 'react-s3-uploader/s3upload';
import CircularProgressbar from 'react-circular-progressbar';

export default class ThumbnailFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      files: [this.props.file]
    };
    this.fileIndex = this.props.fileIndex;
    this.fileType = this.props.file.type;

    this.toggleTitleInput = this.toggleTitleInput.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  componentWillMount() {
    if (!this.props.file.path && process.env.REACT_APP_BUCKET_URL) {
      this._id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
      this.uploadFile();
    }
  }

  uploadFile() {
    this.myUploader = new S3Upload({
      onProgress: this.handleProgress,
      onFinishS3Put: this.handleFinish,
      fileElement: this.state,
      signingUrl: '/s3/sign',
      server: process.env.REACT_APP_SERVER,
      onError: this.handleError,
      uploadRequestHeaders: {'x-amz-acl': 'public-read'},
      contentDisposition: 'auto',
      scrubFilename: (filename) => {
        const secureFilename = filename.replace(/[^\w\d_\-\.]+/ig, ''); // eslint-disable-line
        return `${this._id}-${secureFilename}`;
      },
      signingUrlMethod: 'GET',
      signingUrlWithCredentials: true
    });
  }

  handleProgress(percentage) {
    this.setState({progress: percentage});
  }

  handleFinish(event) {
    const file = {
      name: event.filename,
      type: this.imageType,
      path: `${process.env.REACT_APP_BUCKET_URL}/${event.filename}`,
      thumbPath: `http://iiif.orphe.us/${event.filename}/full/90,/0/default.jpg`,
      _id: this._id
    };
    this.props.updateFileCb(this.fileIndex, file);
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
            src={`//iiif.orphe.us/${this.props.file.name}/square/90,/0/default.jpg`}
          />
          {/*<Field*/}
            {/*name={`files[${this.props.fileIndex}].title`} component={this.inputComponent} type="text"*/}
            {/*placeholder="Image label..." value={this.props.file.title}*/}
          {/*/>*/}
      </div>
    )
  }
}
