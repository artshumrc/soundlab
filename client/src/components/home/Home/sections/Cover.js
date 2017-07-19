import React from 'react'
import Bricks from 'bricks.js'
import _ from 'underscore'

const initializeBricks = () => {
	const instance = Bricks({
	  container: '.brick-mosaic',
		packed: 'data-packed',
		sizes: [
			{ columns: 6, gutter: 10 },
			{ mq: '600px', columns: 7, gutter: 15 },
			{ mq: '700px', columns: 8, gutter: 15 },
			{ mq: '800px', columns: 9, gutter: 20 },
			{ mq: '900px', columns: 10, gutter: 20 },
			{ mq: '1000px', columns: 11, gutter: 20 },
			{ mq: '1200px', columns: 13, gutter: 20 },
			{ mq: '1400px', columns: 16, gutter: 20 },
			{ mq: '1600px', columns: 19, gutter: 20 },
		],
		position: true,
	})

	instance.resize(true)
};

class Cover extends React.Component {

	componentDidMount() {
		initializeBricks();
	}

	render() {
		const imagesUpperRange = 105;
		const images = _.shuffle(_.range(1, imagesUpperRange));
		const windowWidth = window.innerWidth;
		let nImages = 55;
		let randInt;

		// images = []

		if (windowWidth > 1400) {
			nImages = 105;
		} else if (windowWidth > 1200) {
			nImages = 75;
		} else if (windowWidth > 900) {
			nImages = 55;
		} else if (windowWidth > 600) {
			nImages = 25;
		}

		for (let i = 0; i < nImages; i++ ) {
			randInt = Math.floor(Math.random() * imagesUpperRange) + 1;
			delete images[randInt];
		}

		// images = [3, 27, 9, 62.....]

		return (
				<div className="cover home-cover">
					<div className="cover-background">
						<div className="brick-mosaic">
							{images.map((image, i) => (
								<img
									key={`${image}-${i}`}
									className="brick-mosaic-image"
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
