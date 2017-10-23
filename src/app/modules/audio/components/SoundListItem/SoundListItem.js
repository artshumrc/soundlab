import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import styles from './SoundListItem.scss'


class SoundListItem extends Component{

	constructor(props) {
		super(props);

		this.state = {
			mouseOver: '',
		};
	}

	handleClick() {
		// Start item on player

	}

  render() {
    const { sound } = this.props;
		const { mouseOver } = this.state;

		if (!sound) {
			return null;
		}

		const byline = _.findWhere(sound.post_meta, { meta_key: 'byline' });
		const duration = "0:00";

    const thumbnailListImage = {
      width: '90px',
      height: '90px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

		if (sound.thumbnail) {
      thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(sound.thumbnail, 'small')}")`;
		} else {
      thumbnailListImage.backgroundImage = 'url("/images/default_sound.jpg")';
		}

    return (
      <Link
				className={styles.soundListItem}
				to={`/sound/${sound.post_name}`}
			>
	      <Row >
          <Col sm={2}>
            <span className={styles.index}>
							{this.props.index + 1}
						</span>
          </Col>
          <Col sm={7}>
						<div className={styles.itemContent}>
	            <div className={styles.thumbnail}>
		            <div
									className={styles.thumbnailImage}
									style={thumbnailListImage}
								/>
								<div
									className={`${styles.playButton}
										${mouseOver ? styles.playButtonHover : ''}
									`}
								>
									<i className="mdi mdi-play" />
								</div>
							</div>
							<div className={styles.itemText}>
								<h3 className={styles.title}>
									{sound.post_title}
								</h3>
								{byline &&
									<span className={styles.byline}>
										{byline}
									</span>
								}
							</div>
						</div>
          </Col>
          <Col sm={3}>
            <span className={styles.duration}>
							{duration}
						</span>
					</Col>
	      </Row>
			</Link>
    );
  }
}

SoundListItem.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
};

export default SoundListItem;
