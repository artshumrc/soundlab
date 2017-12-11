import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';

import './CollectionEditor.css';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)
const maxLength2100 = maxLength(2100)


class CollectionEditor extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (
			!this.props.collection && nextProps.collection
		|| this.props.collection !== nextProps.collection
		) {
      this.props.destroy();
      this.props.initialize({ ...nextProps.collection });
    }
  }

	render() {
		return (
			<div className="collectionEditor">
				<DashboardNav />

				<h1>Collection Settings</h1>

				<form
					className="collectionEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="collectionEditorFormInputOuter collectionEditorFormTitleOuter">
						<label>What is your Organization's or Collection's title?</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your Organization or Collection"
							validate={[required, maxLength200]}
						/>
						<span
							className="collectionEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="collectionEditorFormInputOuter collectionEditorFormDescriptionOuter">
						<label>Enter a brief description of your collection.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of collection . . . "
							validate={[required, maxLength2100]}
						/>
						<span
							className="collectionEditorFormHelp"
						>
							?
						</span>
					</div>

					<div
						className="
							collectionNameAvailabilityFormInputOuter
							collectionNameAvailabilityFormURLOuter
							collectionNameAvailabilityFormURLOuterDisabled
						"
					>
						<div>
							<label>At what URL would you like users to access your collection?</label>
							<Field
								name="hostname"
								type="text"
								component="input"
								placeholder="example"
								validate={[required, maxLength200]}
								disabled
							/>
							<div className="collectionNameAvailabilityFormURL">
								<span>
									.orphe.us
								</span>
							</div>
							<span
								className="collectionEditorFormHelp"
							>
								?
							</span>
						</div>
						<div>
							<span className="">
								Contact <a href="mailto:support@orphe.us">support</a> to change your collection URL.
							</span>
						</div>
					</div>

					<button
						type="submit"
						className={`
							collectionEditorButton
						`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'CollectionEditor',
})(CollectionEditor);
