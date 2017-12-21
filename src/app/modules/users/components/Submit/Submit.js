import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import Cookies from 'js-cookie';


import TrackUploader from '../../../dashboard/components/TrackUploader';


import styles from './Submit.scss';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength100 = maxLength(100)
const maxLength1000 = maxLength(1000)


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


		return (
			<form
				className={styles.submit}
				onSubmit={handleSubmit(this.submitWithClearForm.bind(this))}
			>
				{
				submitted ?
					<div className={styles.submitFormTitleOuter}>
						<h1 className={styles.submitFormTitle}>
							Thank you for submitting to Sound Lab.
						</h1>
						<p className={styles.submittedMessage}>
							<Link to="/profile">Return to your tracks</Link>.
						</p>
					</div>
				:
					<div>
						<div className={styles.submitFormTitleOuter}>
							<h1 className={styles.submitFormTitle}>
								Upload a track
							</h1>
						</div>
						<div className={styles.submitForm}>
							<div className={styles.submitFormInner}>
								<label>File</label>
								<Row>
									<Col md="7">
										<Field
											name="link"
											type="text"
											component="input"
											placeholder="Paste a link"
											validate={[required, maxLength1000]}
										/>
									</Col>
									<Col md="2">
										<span className={styles.submitOr} >
											or
										</span>
									</Col>
									<Col md="3">
										<TrackUploader
											addFile={this.addFile}
											track={track}
										/>
									</Col>
								</Row>
								<label>Title</label>
								<Field
									name="title"
									type="text"
									component="input"
									validate={[required, maxLength1000]}
								/>
								<label>Description</label>
								<Field
									name="description"
									component="textarea"
									validate={[required, maxLength1000]}
								/>
								<label>Location</label>
								<Field
									name="location"
									type="text"
									component="input"
									validate={[maxLength1000]}
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
