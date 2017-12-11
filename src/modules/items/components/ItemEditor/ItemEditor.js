import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import Button from '../../../../components/common/buttons/Button';
import DashboardNav from '../../../dashboard/components/DashboardNav';

import './ItemEditor.css';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)
const maxLength2100 = maxLength(2100)


class ItemEditor extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (
			!this.props.item && nextProps.item
		|| this.props.item !== nextProps.item
		) {
      this.props.destroy();
      this.props.initialize({ ...nextProps.item });
    }
  }

	render() {
		return (
			<div className="itemEditor">
				<DashboardNav />

				<h1>Item Settings</h1>

				<form
					className="itemEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="itemEditorFormInputOuter itemEditorFormTitleOuter">
						<label>What is your Organization's or Item's title?</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your Organization or Item"
							validate={[required, maxLength200]}
						/>
						<span
							className="itemEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="itemEditorFormInputOuter itemEditorFormDescriptionOuter">
						<label>Enter a brief description of your item.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of item . . . "
							validate={[required, maxLength2100]}
						/>
						<span
							className="itemEditorFormHelp"
						>
							?
						</span>
					</div>

					<div
						className="
							itemNameAvailabilityFormInputOuter
							itemNameAvailabilityFormURLOuter
							itemNameAvailabilityFormURLOuterDisabled
						"
					>
						<div>
							<label>At what URL would you like users to access your item?</label>
							<Field
								name="hostname"
								type="text"
								component="input"
								placeholder="example"
								validate={[required, maxLength200]}
								disabled
							/>
							<div className="itemNameAvailabilityFormURL">
								<span>
									.orphe.us
								</span>
							</div>
							<span
								className="itemEditorFormHelp"
							>
								?
							</span>
						</div>
						<div>
							<span className="">
								Contact <a href="mailto:support@orphe.us">support</a> to change your item URL.
							</span>
						</div>
					</div>

					<button
						type="submit"
						className={`
							itemEditorButton
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
	form: 'ItemEditor',
})(ItemEditor);
