import React from 'react';
import Bricks from 'bricks.js'
import _ from 'underscore'
import './Bricks.css';

const initializeBricks = () => {
	const instance = Bricks({
	  container: '.bricks',
		packed: 'data-packed',
		sizes: [
			{ columns: 5, gutter: 20 },
			{ mq: '500px', columns: 6, gutter: 20 },
			{ mq: '600px', columns: 7, gutter: 20 },
			{ mq: '700px', columns: 8, gutter: 20 },
			{ mq: '800px', columns: 9, gutter: 20 },
			{ mq: '900px', columns: 10, gutter: 20 },
			{ mq: '1000px', columns: 11, gutter: 20 },
			{ mq: '1100px', columns: 12, gutter: 20 },
			{ mq: '1200px', columns: 13, gutter: 20 },
			{ mq: '1300px', columns: 14, gutter: 20 },
			{ mq: '1400px', columns: 15, gutter: 20 },
			{ mq: '1500px', columns: 16, gutter: 20 },
			{ mq: '1600px', columns: 17, gutter: 20 },
		],
		position: true,
	})
	instance.resize(true)

	setTimeout(() => {
		instance.pack()
	}, 100);
}

const makeDefaultBricks = () => {
	const imagesUpperRange = 106;
	const images = _.shuffle(_.range(1, imagesUpperRange));
	const windowWidth = window.innerWidth;
	let nImages = 55;
	let randInt;

	if (windowWidth > 1400) {
		nImages = 105;
	} else if (windowWidth > 900) {
		nImages = 75;
	} else if (windowWidth > 600) {
		nImages = 50;
	}

	for (let i = 0; i < imagesUpperRange - nImages; i++ ) {
		randInt = Math.floor(Math.random() * imagesUpperRange) + 1;
		delete images[randInt];
	}

	return images.map((image, i) => (
		<img
			key={`${image}-${i}`}
			className="brick"
			src={`//iiif.orphe.us/orpheus/art/${image}.jpg/full/90,/0/default.jpg`}
		/>
	))
}

class _Bricks extends React.Component {
	componentDidMount() {
		initializeBricks();
	}

	render() {
	 	let bricks = this.props.children;

		if (!bricks) {
			bricks = makeDefaultBricks();
		}

		return (
			<div className="bricks">
				{bricks}
			</div>
		)
	}
}

export { _Bricks as Bricks };
