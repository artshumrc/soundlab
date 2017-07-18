import React from 'react'
import Bricks from 'bricks.js'
import _ from 'underscore'

class Cover extends React.Component {

	componentWillUpdate() {
		const instance = Bricks({
		  container: '.block-mosaic'
		})
	}

	render() {
		const images = [];
		const imagesUpperRange = 106;
		const nImages = 55;
		let randInt;
		let i = 10000;

		while (images.length < nImages && i > 0) {
			randInt = Math.floor(Math.random() * imagesUpperRange) + 1;
			if (!~images.indexOf(randInt)) {
				images.push(randInt);
			}
			i -= 1;
		}

		console.log(images);

		return (
				<div className="cover home-cover">
					<div className="cover-background">
						<div className="block-mosaic">
							{images.map((image, i) => (
								<img
									className="block-mosaic-image"
									src={`//iiif.orphe.us/orpheus/art/${image}.jpg/full/90,/0/default.jpg`}
								/>
							))}
						</div>
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
