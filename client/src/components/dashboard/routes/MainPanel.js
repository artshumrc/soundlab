import React from 'react';
import {Image, Col, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';

import './MainPanel.css';

export default class MainPanel extends React.Component {
	render() {
		const data = [
      {name: '80', pv: 60},
      {name: '60', pv: 80},
      {name: '90', pv: 90},
      {name: '120', pv: 120},
      {name: '80', pv: 80},
      {name: '90', pv: 90},
      {name: '80', pv: 60},
		];
		return (
			<div id="mainPanel">
				<div className="topBar">
					<span className="title">Main Panel</span>
				</div>
				<div className="content">
					<Row>
						<Col lg={4}>
							<Panel>
								<div className="notificationIcon comments">
									<FontAwesome name="comments" size="2x" />
								</div>
								<div className="notification">
									<h2>50 User Comments</h2>
									<h3>3 new comments</h3>
								</div>
							</Panel>
						</Col>
						<Col lg={4}>
							<Panel>
								<div className="notificationIcon projects">
									<FontAwesome name="folder-open-o" size="2x" />
								</div>
								<div className="notification">
									<h2>50 User Comments</h2>
									<h3>3 new comments</h3>
								</div>
							</Panel>
						</Col>
						<Col lg={4}>
							<Panel>
								<div className="notificationIcon articles">
									<FontAwesome name="file-o" size="2x" />
								</div>
								<div className="notification">
									<h2>50 User Comments</h2>
									<h3>3 new comments</h3>
								</div>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Panel className="articleDetails">
								<Image width="60px" height="60px" src="/images/sampleCollection.png" rounded />
								<span className="articleTitle">An article (abbreviated art) is a word that is used</span>
								<div className="pull-right">
									<div className="icon">
										<FontAwesome name="clock-o" /> 1 week ago
                  </div>
									<div className="icon">
										<FontAwesome name="comments" /> 22 comments
                  </div>
									<div className="icon">
										<FontAwesome name="list-alt" /> Sculpture
                  </div>
								</div>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Panel className="articleDetails">
								<Image width="60px" height="60px" src="/images/sampleCollection.png" rounded />
								<span className="articleTitle">An article (abbreviated art) is a word that is used</span>
								<div className="pull-right">
									<div className="icon">
										<FontAwesome name="clock-o" /> 1 week ago
                  </div>
									<div className="icon">
										<FontAwesome name="comments" /> 22 comments
                  </div>
									<div className="icon">
										<FontAwesome name="list-alt" /> Sculpture
                  </div>
								</div>
							</Panel>
						</Col>
					</Row>
					<Row className="articleDetails">
						<Col lg={12}>
							<Panel>
								<Image width="60px" height="60px" src="/images/sampleCollection.png" rounded />
								<span className="articleTitle">An article (abbreviated art) is a word that is used</span>
								<div className="pull-right">
									<div className="icon">
										<FontAwesome name="clock-o" /> 1 week ago
                  </div>
									<div className="icon">
										<FontAwesome name="comments" /> 22 comments
                  </div>
									<div className="icon">
										<FontAwesome name="list-alt" /> Sculpture
                  </div>
								</div>
							</Panel>
						</Col>
					</Row>
					<Row>
						<Col lg={6} className="chart">
							<div className="panel panel-default">
								<div className="panel-heading">
                  Analytics
                  <div className="pull-right">
	<FontAwesome name="ellipsis-v" />
                  </div>
								</div>
								<div className="panel-body">
									<BarChart
										width={600}
										height={300}
										data={data}
										margin={{top: 5, right: 30, left: 20, bottom: 5}}
									>
										<XAxis dataKey="name" />
										<YAxis />
										<CartesianGrid strokeDasharray="3 3" />
										<Bar dataKey="pv" fill="#5ba2e4" />
									</BarChart>
								</div>
							</div>
						</Col>
						<Col lg={6} className="timeline">
							<div className="panel panel-default">
								<div className="panel-heading">
                  Activities
                  <div className="pull-right">
	<FontAwesome name="ellipsis-v" />
                  </div>
								</div>
								<div className="panel-body">
									<ListGroup>
										<ListGroupItem>Mark wrote a message <span className="timelineDate">2 min ago</span></ListGroupItem>
										<ListGroupItem>Anna created a new website <span
											className="timelineDate"
										>1 hour ago</span></ListGroupItem>
										<ListGroupItem>Jonatan sent a new message <span
											className="timelineDate"
										>3 hours ago</span></ListGroupItem>
										<ListGroupItem>Mark wrote a message <span className="timelineDate">1 week ago</span></ListGroupItem>
									</ListGroup>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
