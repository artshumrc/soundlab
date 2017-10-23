import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import _ from 'underscore';


import styles from './FeaturedTrack.scss'

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
		const { track, purple, showFeaturedTrackLabel } = this.props;
		let postTitle = track ? track.post_title : '';
		let byline = '';
		let bylineMeta;

		if (track) {
			bylineMeta = _.findWhere(track.post_meta, { meta_key: 'byline' });
		}

		if (bylineMeta) {
			byline = bylineMeta.meta_value;
		}


    return (
      <div
				className={styles.featuredTrackComponent}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onClick={this.handleClick.bind(this)}
			>
        <div
					className={styles.featuredTrackPlayerContainer}
				>
					<div className={styles.playerContainer}>
						<div
							className={`${styles.playerRow1}
								${purple ? styles.playerRowPurple : ''}
								${status.length ? styles.playerRow1Hover : ''}
							`}
						/>
						<div
							className={`${styles.playerRow2}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow3}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow4}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow5}
								${status.length ? styles.playerRow5Hover : ''}
							`}
						/>
						<div className={styles.playButtonContainer}>
							{status === 'play' ?
								<i className="mdi mdi-pause" />
							:
								<i className="mdi mdi-play" />
							}
						</div>
					</div>
        </div>
        <div className={styles.featuredTrackMetaContainer}>
					<div>
						{showFeaturedTrackLabel && 
		          <h6
								className={`${styles.featuredTrackTitle}
									${status.length ? styles.featuredTrackTitleHover : ''}
								`}
							>
								Featured Track
							</h6>
						}
					</div>
          <span className={styles.featuredTrackMetaItemTitle}>
						{postTitle}
					</span>
					{byline &&
	          <span className={styles.featuredTrackMetaItemAuthor}>
							{byline}
						</span>
					}
        </div>
      </div>
    );
  }
}

FeaturedTrack.propTypes = {
	track: PropTypes.object,
	purple: PropTypes.bool,
};


export default FeaturedTrack
