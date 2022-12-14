import React from 'react';
import CoverBackground from '../CoverBackground';
import './Cover.css';


class Cover extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
		};
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.handleResize();
		});
	}

	handleResize() {
		this.setState({
			windowWidth: window.innerWidth,
		});
	}

	render() {
		const { className, full, bottom, background, reactsToMouse, overlay } = this.props;
		const classes = [className];
		const { windowWidth } = this.state;

		if (full) {
			classes.push('cover--full');
		}

		if (bottom) {
			classes.push('cover--bottom');
		} else {
			classes.push('cover--center');
		}


		return (
			<div
				className={`cover ${classes.join(' ')}`}
				style={{
					width: windowWidth,
					height: full ? window.innerHeight : 400,
				}}
			>
				<div
					className="cover-inner"
					style={{
						width: windowWidth
					}}
				>
					{
						background &&
						<CoverBackground
							reactsToMouse={reactsToMouse}
						>
							{background}
						</CoverBackground>
					}
					{
						this.props.children &&
						<div className="cover-content">
							{this.props.children}
						</div>
					}
					{
						overlay &&
						<div className="cover-overlay">
							{overlay}
						</div>
					}
				</div>
			</div>
		);
	}
}

export default Cover;
