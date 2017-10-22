import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';


import styles from './FeaturedTrack.scss'

@CSSModules(styles, {allowMultiple: true})
class FeaturedTrack extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: '',
		};
	}

	handleMouseEnter(){
		const { status } = this.state;
		if (status !== 'play') {
			this.setState({
				status: 'hover',
			});
		}
	}

	handleMouseLeave(){
		const { status } = this.state;
		if (status !== 'play') {
			this.setState({
				status: '',
			});
		}
	}

	handleClick(){
		const { status } = this.state;
		if (status !== 'play') {
			this.setState({
				status: 'play',
			});
		} else {
			this.setState({
				status: '',
			});
		}
	}

  render() {
		const { status } = this.state;


    return (
      <div
				styleName="featured-track-component"
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onClick={this.handleClick.bind(this)}
			>
        <div
					styleName="featured-track-player-container"
				>
					<div styleName="player-container">
						<div styleName={`player-row-1 ${status.length ? 'player-row-1-hover' : ''}`} />
						<div styleName="player-row-2" />
						<div styleName="player-row-3" />
						<div styleName="player-row-4" />
						<div styleName={`player-row-5 ${status.length ? 'player-row-5-hover' : ''}`} />
						<div styleName="play-button-container">
							{status === 'play' ?
								<i className="mdi mdi-pause" />
							:
								<i className="mdi mdi-play" />
							}
						</div>
					</div>
        </div>
        <div styleName="featured-track-meta-container">
					<div>
	          <h6
							styleName={`featured-track-title ${status.length ? 'featured-track-title-hover' : ''}`}
						>
							Featured Track
						</h6>
					</div>
          <span styleName="featured-track-meta-item-title">Mozart / Funk</span>
          <span styleName="featured-track-meta-item-author">Dollie Keller</span>
        </div>
      </div>
    );
  }
}

export default FeaturedTrack
