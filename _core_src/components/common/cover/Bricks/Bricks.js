import React from 'react';
import Bricks from 'bricks.js';
import _ from 'underscore';
import autoBind from 'react-autobind';
import OnImagesLoaded from 'react-on-images-loaded';


import './Bricks.css';


class _Bricks extends React.Component {

	constructor(props) {
		super(props);
		const windowWidth = window.innerWidth;

		let nImages = 96;

		if (windowWidth < 600) {
			nImages = 50;
		}

		if (props.files) {
			nImages = props.files.length;
		}

		this.nImages = nImages;

		this.state = {
			showImages: false,
		};
		autoBind(this);
	}

	static defaultProps = {
		loaded: false,
	}

	componentDidMount() {
		this.initializeBricks();
	}

	initializeBricks() {
		let sizes = [
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
		];


		if (this.nImages === 1) {
			sizes = [
				{ columns: 1, gutter: 20 },
			];
		} else if (1 < this.nImages && this.nImages < 6) {
			sizes = [
				{ columns: 2, gutter: 20 },
			];
		} else if (6 <= this.nImages && this.nImages < 12) {
			sizes = [
				{ columns: 3, gutter: 20 },
			];
		} else if (12 <= this.nImages && this.nImages < 24) {
			sizes = [
				{ columns: 4, gutter: 20 },
			];
		} else if (24 <= this.nImages && this.nImages < 48) {
			sizes = [
				{ columns: 6, gutter: 20 },
			];
		} else if (48 <= this.nImages && this.nImages < 60) {
			sizes = [
				{ columns: 7, gutter: 20 },
			];
		} else if (60 <= this.nImages && this.nImages < 72) {
			sizes = [
				{ columns: 8, gutter: 20 },
			];
		} else if (72 <= this.nImages && this.nImages < 84) {
			sizes = [
				{ columns: 9, gutter: 20 },
			];
		} else if (84 <= this.nImages && this.nImages < 96) {
			sizes = [
				{ columns: 10, gutter: 20 },
			];
		}

		this.instance = Bricks({
			container: '.bricks-inner',
			packed: 'data-packed',
			sizes,
			position: true,
		});
		this.instance.resize(true);
		this.instance.pack();
	}


	makeDefaultBricks() {
		const imagesUpperRange = 106;
		const images = _.shuffle(_.range(1, imagesUpperRange));
		images.splice(this.nImages + 1, imagesUpperRange - this.nImages);

		return images.map((image, i) => (
			<img
				alt={image}
				key={`${image}-${i}`} // eslint-disable-line
				className="brick"
				src={`//iiif.orphe.us/orpheus/art/${image}.jpg/full/90,/0/default.jpg`}
			/>
		));
	}

	makeFileBricks() {
		const { files } = this.props;
		let _files = _.shuffle(files);

		let imageWidth = '90';

		if (this.nImages === 1) {
			imageWidth = 'full'; // Math.floor(window.innerWidth * 1.2);
		} else if (1 < this.nImages && this.nImages < 6) {
			imageWidth = Math.floor(window.innerWidth * 0.5);
		} else if (6 <= this.nImages && this.nImages < 12) {
			imageWidth = Math.floor(window.innerWidth * 0.4);
		} else if (12 <= this.nImages && this.nImages < 24) {
			imageWidth = Math.floor(window.innerWidth * 0.3);
		} else if (24 <= this.nImages && this.nImages < 48) {
			imageWidth = Math.floor(window.innerWidth * 0.2);
		} else if (48 <= this.nImages && this.nImages < 60) {
			imageWidth = Math.floor(window.innerWidth * 0.15);
		} else if (60 <= this.nImages && this.nImages < 72) {
			imageWidth = Math.floor(window.innerWidth * 0.12);
		} else if (72 <= this.nImages && this.nImages < 84) {
			imageWidth = Math.floor(window.innerWidth * 0.1);
		} else if (84 <= this.nImages && this.nImages < 96) {
			imageWidth = Math.floor(window.innerWidth * 0.05);
		}

		// round to nearest hundred
		imageWidth = Math.floor(imageWidth / 100) * 100;

		return _files.map((file, i) => (
			<img
				alt={file.name}
				key={`${file.name}-${i}`} // eslint-disable-line
				className="brick"
				src={`//iiif.orphe.us/${file.name}/full/${imageWidth},/0/default.jpg`}
			/>
		));
	}

	handleAllImagesLoaded() {
		setTimeout(() => {
			this.setState({
				showImages: true,
			});
		}, 3000);
	}

	render() {
		const { files } = this.props;
		let bricks = null;

		if (files) {
			bricks = this.makeFileBricks();
		} else {
			bricks = this.makeDefaultBricks();
		}

		if (this.state.showImages) {
			setTimeout(() => {
				this.instance.pack();
			}, 500);
		}


		return (
			<div className={`bricks ${this.state.showImages ? '' : 'loading'}`}>
				<OnImagesLoaded
					onLoaded={this.handleAllImagesLoaded.bind(this)}
					onTimeout={this.handleAllImagesLoaded.bind(this)}
					timeout={100000}
				>
					<div className="bricks-inner">
						{bricks}
					</div>
				</OnImagesLoaded>
			</div>
		);
	}
}

export default _Bricks;
