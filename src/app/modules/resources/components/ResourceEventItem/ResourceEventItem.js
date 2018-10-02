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

    const {
      event, loading, error

    } = this.props;

    if (loading || !event) {
      // TODO: add loading state
      return null;
    }


		const eventStart = _.findWhere(event.post_meta, { meta_key: 'start_date' });
		const eventEnd = _.findWhere(event.post_meta, { meta_key: 'end_date' });
    const eventStartTime = _.findWhere(event.post_meta, { meta_key: 'start_time' });
    const eventEndTime = _.findWhere(event.post_meta, { meta_key: 'end_time' });

		let eventMonth;
		let eventDay;
		let startTime;
		let endTime;

		if (eventStart) {
			eventMonth = moment(eventStart.meta_value).format('MMM');
			eventDay = moment(eventStart.meta_value).format('DD');
			startTime = eventStartTime.meta_value;
		}

		if (eventEndTime) {
			endTime = eventEndTime.meta_value;
		}

    return (
      <Link
				className={styles.eventContainer}
				to={`/events/${event.post_name}`}
			>
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
              	{startTime}{endTime ? `- ${endTime}` : ''}
  					</span>
          </div>
        </div>
      </Link>
    );
  }
}

ResourceEventItem.propTypes = {
  event: PropTypes.object,
};

export default ResourceEventItem;
