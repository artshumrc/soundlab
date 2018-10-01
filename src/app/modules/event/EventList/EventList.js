import React from 'react';
import _ from 'underscore';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import ItemListDescriptionContainer from '../../../containers/ItemListDescriptionContainer';
import tabsMuiTheme from '../../../lib/tabsMuiTheme';
//import Pagination from '../../Pagination';
import EventTeaser from '../EventTeaser';
import styles from './EventList.scss';

const EventList = props => {
	const { itemsUpcoming, itemsPast } = props;

	return (
		<div className={styles.itemList}>
			<MuiThemeProvider  muiTheme={tabsMuiTheme}>
				<Tabs>
					<Tab label="Upcoming Events">
						<div className={styles.itemTabContent}>
							<div className={styles.items}>
								{itemsUpcoming.map((item, i) => (
									<EventTeaser
										key={item.id}
										{...item}
									/>
								))}
							</div> {/*
							{props.withPagination ?
								<Pagination />
							: ''}
							*/}
						</div>
					</Tab>
					<Tab label="Already Past Events">
						<div className={styles.itemTabContent}>
							<div className={styles.items}>
								{itemsPast.map((item, i) => (
									<EventTeaser
										key={item.id}
										{...item}
									/>
								))}
							</div>
							{/*
							{props.withPagination ?
								<Pagination />
							: ''}
							*/}
						</div>
					</Tab>
				</Tabs>
			</MuiThemeProvider>
		</div>
	);
}

EventList.defaultProps = {
	itemsUpcoming: [],
	itemsPast: [],
};

export default EventList;
