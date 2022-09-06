import React from 'react';
import _ from 'underscore';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import ItemListDescriptionContainer from '../../../containers/ItemListDescriptionContainer';
import tabsMuiTheme from '../../../lib/tabsMuiTheme';
//import Pagination from '../../Pagination';
import EventTeaser from '../EventTeaser';
import './EventList.css';

const EventList = props => {
	const { itemsUpcoming, itemsPast } = props;

	return (
		<div className="itemList">
			<h1 className="pageSectionTitle">
				Workshops
			</h1>
			<MuiThemeProvider  muiTheme={tabsMuiTheme}>
				<Tabs>
					<Tab label="Upcoming Events" className="tabsLabel">
						<div className="itemTabContent">
							<div className="items">
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
					<Tab label="Already Past Events" className="tabsLabel">
						<div className="itemTabContent">
							<div className="items">
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
