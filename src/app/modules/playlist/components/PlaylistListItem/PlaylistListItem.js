import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import styles from './PlaylistListItem.scss'


class PlaylistListItem extends Component{

	constructor(props) {
		super(props);

		this.state = {
			mouseOver: false,
		};
	}

	handleClick() {
		// Start item on player

	}

	handleMouseEnter(){
		this.setState({
			mouseOver: true,
		});
	}

	handleMouseLeave(){
		this.setState({
			mouseOver: false,
		});
	}

  render() {
    const { playlist } = this.props;
		const { mouseOver } = this.state;

		if (!playlist) {
			return null;
		}

		const byline = _.findWhere(playlist.post_meta, { meta_key: 'byline' });
		const duration = "0:00";

    const thumbnailListImage = {
      width: '70px',
      height: '70px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

		if (playlist.thumbnail) {
      thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(playlist.thumbnail, 'thumbnail')}")`;
		} else {
      thumbnailListImage.backgroundImage = 'url("/images/default_sound_600w600h.png")';
		}

    return (
      <Row >
	      <Link
					className={styles.playlistListItem}
					to={`/playlists/${playlist.post_name}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
          <Col sm={1}>
            <span className={styles.index}>
							{this.props.index + 1}
						</span>
          </Col>
          <Col sm={8}>
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
									<div>
										<i className="mdi mdi-play" />
									</div>
								</div>
							</div>
							<div className={styles.itemText}>
								<h3 className={styles.title}>
									{playlist.post_title}
								</h3>
								{byline &&
									<span className={styles.byline}>
										{byline.meta_value}
									</span>
								}
							</div>
						</div>
          </Col>
          <Col sm={3} className={styles.durationColumn}>
            <span className={styles.duration}>
						</span>
					</Col>
				</Link>
	    </Row>
    );
  }
}

PlaylistListItem.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
};

export default PlaylistListItem;
