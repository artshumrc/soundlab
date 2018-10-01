import React from 'react';
import _ from 'underscore';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BigCalendar from 'react-big-calendar';
import { Link, withRouter } from 'react-router';
//import ItemListDescription from '../../ItemListDescription';
//import tabsMuiTheme from '../../../lib/tabsMuiTheme';
//import Pagination from '../../Pagination';
//import EventTeaser from '../EventTeaser';
import styles from './Calendar.scss';

const localizer = BigCalendar.momentLocalizer(moment);

const Event = props => (
	<Link to={props.link}>

	</Link>
);

const Calendar = props => {
	const { events } = props;
  console.log('**************', props)

	if (!events || !events.length) {
		return <div>No events</div>;
	}

	const _events = [];
	events.forEach(event => {
		const start_date = _.findWhere(event.post_meta, { meta_key: 'start_date' });
		const start_time = _.findWhere(event.post_meta, { meta_key: 'start_time' });
		const end_date = _.findWhere(event.post_meta, { meta_key: 'end_date' });
		const end_time = _.findWhere(event.post_meta, { meta_key: 'end_time' });
		const short_title = _.findWhere(event.post_meta, { meta_key: 'short_title' });
		let start;
		let end;

		if (start_date && start_date.meta_value) {
			start = new Date(moment(start_date.meta_value).format());
		}

		if (end_date && end_date.meta_value) {
			end = new Date(moment(end_date.meta_value).format());
		}

		let title = short_title ? short_title.meta_value : event.post_title;

		if (title.split(': ').length > 1) {
			title = title.split(': ')[1];
		}

		let link = `/item/${event.post_name}`;

		_events.push({
			start,
			end: start,
			title,
			link,
		})
	})

	return (
		<div className={styles.itemList}>
			<BigCalendar
				events={_events}
        localizer={localizer}
				defaultView="month"
				views={['month', 'week']}
				showMultiDayTimes
				style={{
					height: '600px',
				}}
				/*
				components={{
					event: Event,
				}}
				*/
				selectable
				popup
				onSelectEvent={(event) => {window.location = event.link}}
			/>
		</div>
	);
}

Calendar.defaultProps = {
	itemsUpcoming: [],
	itemsPast: [],
};

export default withRouter(Calendar);
