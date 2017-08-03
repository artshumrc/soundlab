import React from 'react';
import './MainLayout.css';
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';

const MainLayout = props => (
	<div>
		<Header />
		{props.children}
		<Footer />
	</div>
);

export default MainLayout;
