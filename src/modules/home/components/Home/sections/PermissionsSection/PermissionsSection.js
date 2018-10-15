import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './PermissionsSection.css';

export default class PermissionsSection extends React.Component {
	render() {
		return (
			<section id="permissions">
				<Grid>
					<Row>
						<Col md={4}>
							<div className="permissionsHeader">
								<h5>Sharing and Security</h5>
								<p>
									Participate in the community of linked data and scholarship or create private collections with fine grained access controls
								</p>
							</div>
						</Col>
						<Col md={8}>
							<Row>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h6>User Roles</h6>
										<p>
											Administrators can break down Editorial teams into discrete roles and manage fine-grained permissions between roles
										</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h6>Metadata Permissions</h6>
										<p>
											Field by field, choose who can see which metadata on your item records
										</p>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h6>Linked Data Sharing</h6>
										<p>
											When you want to share content, you can seamlessly integrate collections via using shared linked data ontologies
										</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h6>Private Collections</h6>
										<p>
											Share your data with just your team or in a private collection that you create
										</p>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
