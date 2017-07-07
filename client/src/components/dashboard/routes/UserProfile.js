import React from 'react';
import {Col, Row, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import './UserProfile.css';
import FontAwesome from 'react-fontawesome';

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="userProfile">
				<div className="topBar">
					<span className="title">Profile</span>
				</div>
				<div className="content">
					<h2>My profile</h2>
					<hr />
					<Row>
						<Col lg={6}>
							<Image src="/images/userProfile.jpg" responsive />
						</Col>
						<Col lg={6}>
							<h3>Dr. Johnathon Doe</h3>
							<h4>Senior Chief Trainer</h4>
							<div className="socialIcons">
								<a href="#">
									<FontAwesome name="twitter" />
								</a>
								<a href="#">
									<FontAwesome name="linkedin-square" />
								</a>
								<a href="#">
									<FontAwesome name="facebook-official" />
								</a>
								<a href="#">
									<FontAwesome name="skype" />
								</a>
								<a href="#">
									<FontAwesome name="pinterest-square" />
								</a>
								<a href="#">
									<FontAwesome name="apple" />
								</a>
							</div>
							<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex, fermentum vel libero eget
                interdum too semper libero. Curabitur egestas, arcu id tempor convallis ras dignissim, diam vitae ornare
                molestie, ligula an magna imperdiet velit, volutpat tortori felis sit amet ligula. Sed in placerat
                justo. sed, luctus mattis urna.
              </p>
							<ListGroup className="contactDetails">
								<ListGroupItem>
									<FontAwesome name="phone" />
									<div className="details">
										<h5>Phone:</h5>
										<span className="value">+88 01719 45 75 93</span>
									</div>
								</ListGroupItem>
								<ListGroupItem>
									<FontAwesome name="paper-plane-o" />
									<div className="details">
										<h5>Email:</h5>
										<span className="value">info@yoursite.com</span>
									</div>
								</ListGroupItem>
								<ListGroupItem>
									<FontAwesome name="mobile" />
									<div className="details">
										<h5>Mobile:</h5>
										<span className="value">+88 01719 45 75 93</span>
									</div>
								</ListGroupItem>
								<ListGroupItem>
									<FontAwesome name="paper-plane-o" />
									<div className="details">
										<h5>Website:</h5>
										<span className="value"><a href="http://example.com">www.johndoe.com</a></span>
									</div>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
