import React from 'react';

class Cover extends React.Component {
	render() {
		return (
				<div className="cover home-cover">
					<div className="cover-background">
						<div className="block-mosaic" />
					</div>
					<div className="cover-overlay" />
					<div className="cover-content">
						<h1>the archive, reimagined</h1>
						<p>Create and share digital collections across platforms when, where, and how you want</p>
						<div>
							<a className="home-cover-button learn-more">
								Learn More
							</a>
							<a className="home-cover-button">
								Start Now
							</a>
						</div>
					</div>
					<div className="layer" />
				</div>
		)
	}
}


export default Cover;
