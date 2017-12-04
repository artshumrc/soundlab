import React from 'react';
import Bricks from 'bricks.js';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bricksActions from '../../../../actions/bricks';

import './Bricks.css';


class _Bricks extends React.Component {

	constructor(props) {
		super(props);
		const windowWidth = window.innerWidth;
		let nImages = 105;

		if (windowWidth < 600) {
			nImages = 50;
		}

		this.nImages = nImages;
		this.nImagesLoaded = 0;
	}

	static defaultProps = {
		loaded: false,
	}

	componentDidMount() {
		this.initializeBricks();
	}

	initializeBricks() {
		this.instance = Bricks({
		  container: '.bricks-inner',
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
		});
		this.instance.resize(true);
		this.instance.pack();
	}


	handleImageLoad() {
		const { loaded } = this.props;

		if (!loaded) {
			this.nImagesLoaded += 1;

			if (this.nImages <= this.nImagesLoaded) {
				this.handleAllImagesLoaded();
			}
		}
	}

	handleAllImagesLoaded() {
		this.props.actions.imagesLoaded();
		setTimeout(() => { this.instance.pack(); }, 100);
	}

	makeDefaultBricks() {
		const imagesUpperRange = 106;
		const images = _.shuffle(_.range(1, imagesUpperRange));
		images.splice(this.nImages + 1, imagesUpperRange - this.nImages);


		return images.map((image, i) => (
			<img
				alt={image}
				key={`${image}-${i}`}
				className="brick"
				src={`//iiif.orphe.us/orpheus/art/${image}.jpg/full/90,/0/default.jpg`}
				onLoad={this.handleImageLoad.bind(this)}
			/>
		));
	}

	render() {
	 	let bricks = this.props.children;
		const { loaded } = this.props;

		if (!bricks) {
			bricks = this.makeDefaultBricks();
		}

		return (
			<div className={`bricks ${loaded ? '' : 'loading'}`}>
				<div className="bricks-inner">
					{bricks}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	loaded: state.bricks.loaded,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(bricksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(_Bricks);
