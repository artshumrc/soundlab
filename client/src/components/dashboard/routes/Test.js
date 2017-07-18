import React from 'react';
import ReactS3Uploader from 'react-s3-uploader';
import {sign} from '../../../lib/s3Sign';
function asasdf () {
  alert('called');
  console.log("asdfasdf called LOG");
}
export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.onUploadStart = this.onUploadStart.bind(this);
		this.onUploadProgress = this.onUploadProgress.bind(this);
		this.onUploadError = this.onUploadError.bind(this);
		this.onUploadFinish = this.onUploadFinish.bind(this);
		this.getSignedUrl = this.getSignedUrl.bind(this);
	}

	onUploadStart(event) {
		console.log('event onUploadStart LOG', event);
	}

	onUploadProgress(event) {
		console.log('event onUploadProgress LOG', event);
	}

	onUploadError(event) {
		console.log('event onUploadError LOG', event);
	}

	onUploadFinish(event) {
		console.log('event onUploadFinish LOG', event);
	}

	getSignedUrl(file, callback) {
		console.log('getSignedUrl called LOG');
		sign(file.name, file.type).then((data) => {
			callback(data);
		}).catch((error) => {
			console.log('error LOG', error);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.getSignedUrl}>TEST</button>

        <ReactS3Uploader
          // getSignedUrl={this.getSignedUrl}
          accept="image/*"
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          uploadRequestHeaders={{
            'x-amz-acl': 'public-read'
          }}
          signingUrlWithCredentials={ true }
          signingUrl="/s3/sign"
          server="http://localhost:3001"
          contentDisposition="auto"
        />
			</div>
		);
	}
}
