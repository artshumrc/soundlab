import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AuthForms from '../components/AuthForms';
import LogoutContainer from '../containers/LogoutContainer';


export default (
	<div>
		<Route path="sign-in" component={AuthForms}></Route>
		<Route path="logout" component={LogoutContainer}></Route>
	</div>
);
