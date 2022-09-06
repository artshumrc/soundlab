import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row, Col } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import Cookies from 'js-cookie';


import TrackUploader from '../../../dashboard/components/TrackUploader';


import './Submit.css';


class Submit extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			track: null,
		};
	}

	componentDidMount() {
	    const token = Cookies.get('token');
		if (!token) {
			window.location = '/';
		}
	}

	submitWithClearForm(data) {
		const { onSubmit, resetForm } = this.props;

		onSubmit(data);
		// resetForm();
	}

    addFile(track) {
	console.log(this);
		this.setState({
			track,
		});
		this.props.change('link', track.url);
	}

	render() {
		const {
		    handleSubmit, onSubmit, submitted, dismissSubmitted, verifyCaptcha
		} = this.props;
	    const { track } = this.state;
	    const token = Cookies.get('token');

		return (
			<form
				className="submit"
				onSubmit={handleSubmit(this.submitWithClearForm.bind(this))}
			>
				{
				submitted ?
					<div className="submitFormTitleOuter">
						<h1 className="submitFormTitle">
							Thank you for submitting to Sound Lab.
						</h1>
						<p className="submittedMessage">
							<Link to="/profile">Return to your pending submissions</Link>.
						</p>
					</div>
				:
					<div>
						<div className="submitFormTitleOuter">
							<h1 className="submitFormTitle">
								Upload a track
							</h1>
						</div>
						<div className="submitForm">
							<div className="submitFormInner">
								<label>File</label>
								<Row>
									<Col md={7}>
										<Field
											name="link"
											type="text"
											component="input"
											placeholder="Paste a link"
										/>
									</Col>
									<Col md={2}>
										<span className="submitOr" >
											or
										</span>
									</Col>
									<Col md={3}>
										<TrackUploader
											addFile={this.addFile.bind(this)}
											track={track}
											token={token}
										/>
									</Col>
								</Row>
								<label>Title</label>
								<Field
									name="title"
									type="text"
									component="input"
								/>
								<label>Description</label>
								<Field
									name="description"
									component="textarea"
								/>
								<label>Location</label>
								<Field
									name="location"
									type="text"
									component="input"
								/>
							</div>
							<button type="submit">Submit</button>
						</div>
					</div>
				}
			</form>
		);
	}
}

export default reduxForm({
	form: 'SubmitForm',
})(Submit);
