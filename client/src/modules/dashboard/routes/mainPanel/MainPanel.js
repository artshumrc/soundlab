import React from 'react';
import { Image, Col, Row, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Timeline, TimelineItem } from '../../components/Timeline';

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
		const data2 = [
      {name: '80', pv: 60, uv: 90},
      {name: '60', pv: 80, uv: 60},
      {name: '90', pv: 90, uv: 30},
      {name: '120', pv: 120, uv: 90},
      {name: '80', pv: 80, uv: 60},
      {name: '90', pv: 90, uv: 120},
      {name: '80', pv: 60, uv: 90},
		];
		const timelineData = [
      {message: 'Mark wrote a message', date: ' 2 min ago'},
      {message: 'Anna created a new website ', date: '1 hour ago'},
      {message: 'Jonatan sent a new message', date: '3 hours ago'},
      {message: 'Mark wrote a message', date: '1 week ago'}
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
									<ResponsiveContainer height={300} width="100%">
										<BarChart
											data={data}
											margin={{top: 5, right: 30, left: 20, bottom: 5}}
										>
											<XAxis dataKey="name" />
											<YAxis />
											<CartesianGrid strokeDasharray="3 3" />
											<Bar dataKey="pv" fill="#5ba2e4" />
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</Col>
						<Col lg={6} className="timelineWrapper">
							<div className="panel panel-default">
								<div className="panel-heading">
                  Activities
                  <div className="pull-right">
	<FontAwesome name="ellipsis-v" />
                  </div>
								</div>
								<div className="panel-body">
									<Timeline>
										{
                      timelineData.map(timelineItem => (<TimelineItem
	message={timelineItem.message}
	date={timelineItem.date}
                      />))
                    }
									</Timeline>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Panel header="Article reach">
								<ResponsiveContainer height={300} width="100%">
									<AreaChart
										data={data2}
										margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
									>
										<XAxis dataKey="name" />
										<YAxis />
										<CartesianGrid strokeDasharray="3 3" />
										<Area type="monotone" dataKey="pv" stroke="#a4d882" fillOpacity={1} fill="#a4d882" />
										<Area type="monotone" dataKey="uv" stroke="#547df9" fillOpacity={1} fill="#547df9" />
									</AreaChart>
								</ResponsiveContainer>
							</Panel>
						</Col>
					</Row>
				</div>
			</div>);
	}
}
