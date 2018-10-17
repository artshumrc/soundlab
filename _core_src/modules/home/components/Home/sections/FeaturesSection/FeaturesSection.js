import React from 'react';


import './FeaturesSection.css';


export default class FeaturesSection extends React.Component {

	render() {
		return (
			<section id="features">
				<div className="featuresList">
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-view-quilt" />
							<h5>Multimedia Archives</h5>
						</div>
						<hr />
						<p>Present your collections&apos; digital media in a myriad of different formats</p>
					</div>
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-link" />
							<h5>Linked Data Publishing</h5>
						</div>
						<hr />
						<p>Leverage existing ontologies and create your own schemata for your item records</p>
					</div>
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-laptop-chromebook" />
							<h5>Cross-platform Access</h5>
						</div>
						<hr />
						<p>
							Access your data on web, mobile, and in augmented and virtual reality
						</p>
					</div>
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-file-document-box" />
							<h5>Publish Articles</h5>
						</div>
						<hr />
						<p>
							Edit and publish articles related to items in your collection with embedded content records
						</p>
					</div>
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-database" />
							<h5>Long-term storage</h5>
						</div>
						<hr />
						<p>
							After the main public-viewing period of your archive, migrate your data to long term storage
						</p>
					</div>
					<div className="feature">
						<div className="feature-title">
							<i className="mdi mdi-lightbulb-on-outline" />
							<h5>Intelligent Data Entry</h5>
						</div>
						<hr />
						<p>
							Speed up your data entry tasks with a machine learning algorithm that identifies patterns in your data
						</p>
					</div>
				</div>
			</section>
		);
	}
}
