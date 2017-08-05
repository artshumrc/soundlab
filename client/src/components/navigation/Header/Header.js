import React from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import { scrollToElement } from '../../../lib/util';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<Headroom className="header">
				<div className="nav-header">
					<i className="mdi mdi-bars left-menu-toggle-icon" />
					<h2 className="site-title">
						orphe.us
					</h2>
				</div>
				<ul role="nav" className="nav">
					<li>
						<a href="#services" onClick={scrollToElement} >
							Services
						</a>
					</li>
					<li>
						<a href="/community" >
							Community
						</a>
					</li>
					<li>
						<a href="#about" onClick={scrollToElement} >
							About
						</a>
					</li>
					<li>
						<a href="/" className="login-button">
							Sign Up / In
						</a>
					</li>
					<li>
						<a href="/search">
							<i className="mdi mdi-magnify search-icon" />
						</a>
					</li>
				</ul>
			</Headroom>
		);
	}
}
