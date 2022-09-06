import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SoundListCategoryContainer from '../containers/SoundListCategoryContainer';
import SoundListContainer from '../containers/SoundListContainer';
import SoundContainer from '../containers/SoundContainer';


export default (
	<div>
		<Route path="sounds/category/:category_slug" component={SoundListCategoryContainer}></Route>
		<Route path="sounds/:slug" component={SoundContainer}></Route>
		<Route path="sounds" component={SoundListContainer}></Route>
	</div>
);
