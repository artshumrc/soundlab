import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Grid,
  Row,
  Col,
  Button,
  Checkbox
} from 'react-bootstrap';
// import Recaptcha from 'react-recaptcha';
import './CreateAccountSection.css';

export default class CreateAccountSection extends React.Component {
	render() {
    // let recaptchaInstance;
		return (
			<section id="createAccount">
				<Grid>
					<Row>
						<Col lg={6}>
							<h2>Create a new <span className="highlight">orpheus</span> account</h2>
							<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lobortis nulla.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
              </p>
							<Row>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
							</Row>
							<Row>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
								<Col lg={4}>
									<div className="createAccountIcon" />
								</Col>
							</Row>
						</Col>
						<Col lg={6}>
							<h5>Create account</h5>
							<form>
								<div className="inner-addon right-addon">
									<input type="email" className="form-control" placeholder="E-mail" />
									<FontAwesome name="user" />
								</div>
								<div className="inner-addon right-addon">
									<input type="password" className="form-control" placeholder="Password" />
									<FontAwesome name="lock" />
								</div>
								<div className="inner-addon right-addon">
									<input type="password" className="form-control" placeholder="Confirm password" />
									<FontAwesome name="unlock-alt" />
								</div>
								<div className="inner-addon right-addon">
									<input type="text" className="form-control" placeholder="Full name" />
									<FontAwesome name="user" />
								</div>
								<div className="inner-addon right-addon">
									<input type="text" className="form-control" placeholder="Phone number" />
									<FontAwesome name="phone" />
								</div>
								<div className="inner-addon right-addon">
									<input type="text" className="form-control" placeholder="Location" />
									<FontAwesome name="location-arrow" />
								</div>
								<Checkbox>
                    I agree to the terms of use
                  </Checkbox>
								{/* TODO: add site key to recaptcha */}
								{/* <Recaptcha ref={e => recaptchaInstance = e}/>*/}
								<Button bsStyle="primary">Create account</Button>
							</form>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
