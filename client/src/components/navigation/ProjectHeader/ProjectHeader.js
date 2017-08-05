import React from 'react';
import Headroom from 'react-headroom';
import '../../navigation/Header/Header.css';
import './ProjectHeader.css';
import { scrollToElement } from '../../../lib/util';

export default class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<Headroom className="header">
				<div className="nav-header">
					<i className="mdi mdi-bars left-menu-toggle-icon" />
					<h2 className="site-title">
						Project Name
					</h2>
				</div>
				<ul role="nav" className="nav">
					<li>
						<a href="#featured" onClick={scrollToElement} >
							Featured
						</a>
					</li>
					<li>
						<a href="/collections" >
							Collections
						</a>
					</li>
					<li>
						<a href="/articles" >
							Articles
						</a>
					</li>
					<li>
						<a href="#about" onClick={scrollToElement} >
							About
						</a>
					</li>
					<li>
						<a href="#visit" onClick={scrollToElement} >
							Visit
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
