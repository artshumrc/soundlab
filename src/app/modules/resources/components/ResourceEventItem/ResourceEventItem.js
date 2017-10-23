import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _ from 'underscore';
import _s from 'underscore.string';
import moment from 'moment';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import styles from './ResourceEventItem.scss';


class ResourceEventItem extends Component {

  render() {
    const { event } = this.props;

		if (!event) {
			return null;
		}

		const eventStart = _.findWhere(event.post_meta, { meta_key: 'event_start' });
		const eventEnd = _.findWhere(event.post_meta, { meta_key: 'event_end' });
		let eventMonth;
		let eventDay;
		let eventTimeStart;
		let eventTimeEnd;

		if (eventStart) {
			eventMonth = moment(parseInt(eventStart.meta_value, 10) * 1000).format('MMM');
			eventDay = moment(parseInt(eventStart.meta_value, 10) * 1000).format('DD');
			eventTimeStart = moment(parseInt(eventStart.meta_value, 10) * 1000).format('h:mm');
		}

		if (eventEnd) {
			eventTimeEnd = moment(parseInt(eventEnd.meta_value, 10) * 1000).format('h:mm');
		}


    return (
      <div className={styles.eventContainer}>
        <div className={`${styles.eventSectionWrapper} ${styles.dateWrapper}`}>
          <div className={`${styles.dateContainer} ${styles.monthContainer}`}>
            <span className={styles.month}>
							{eventMonth}
						</span>
          </div>
          <div className={styles.dateContainer}>
            <span className={styles.day}>
							{eventDay}
						</span>
          </div>

        </div>
        <div className={`${styles.eventSectionWrapper} ${styles.eventMetaWrapper}`}>
          <div>
            <span className={styles.eventName}>
							{event.post_title}
						</span>
          </div>
          <div>
            <span className={styles.eventTime}>
							{eventTimeStart}{eventTimeEnd ? `- ${eventTimeEnd}` : ''}
						</span>
          </div>
        </div>
      </div>
    );
  }
}

ResourceEventItem.propTypes = {
  event: PropTypes.object,
};

export default ResourceEventItem;
