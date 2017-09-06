import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './PermissionsSection.css';

export default class PermissionsSection extends React.Component {
	render() {
		return (
			<section id="permissions" className="text-center">
				<Grid>
					<Row>
						<Col md={3}>
							<div className="permissionsHeader">
								<h3>To share or not to share</h3>
								<p>
									Participate in the community of linked data and scholarship or create private collections with fine grained access controls
								</p>
							</div>
						</Col>
						<Col md={9}>
							<Row>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h4>User Roles</h4>
										<p>
											Administrators can break down Editorial teams into discrete roles and manage fine-grained permissions between roles
										</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h4>Metadata Permissions</h4>
										<p>
											Field by field, choose who can see which metadata on your item records
										</p>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h4>Linked Data Sharing</h4>
										<p>
											When you want to share content, you can seamless integrate collections via using shared linked data ontologies
										</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className="permissionsInfoBlock">
										<h4>Private Collections</h4>
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
