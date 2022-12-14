import React from 'react';

import './Timer.css';


// via https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
const millisToMinutesAndSeconds = (millis) => {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


class Timer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			position: 0,
		}
	}

	componentDidMount() {
		this.timerInterval = setInterval(() => {
			const { track } = this.props;

			this.setState({
				position: track.sound.position,
			})

		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerInterval);
	}

	renderPlayTime() {
		const { track } = this.props;
		const { position } = this.state;

		let playTime = '';

		playTime = `${millisToMinutesAndSeconds(position)}`;


		if (track.sound.duration) {
			playTime = `${playTime} /`;
			playTime = `${playTime} ${millisToMinutesAndSeconds(track.sound.duration)}`;
		}

		return playTime;
	}

	render() {

		return (
			<div className="playTimeWrapper">
				<span className="playTime">
					{this.renderPlayTime()}
				</span>
			</div>
		);
	}
}


export default Timer;
