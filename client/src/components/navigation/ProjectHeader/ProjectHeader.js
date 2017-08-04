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
						<a href="#featured" onClick={this.scrollToItem} >
							Featured
						</a>
					</li>
					<li>
						<a href="/collections" onClick={this.scrollToItem} >
							Collections
						</a>
					</li>
					<li>
						<a href="/articles" onClick={this.scrollToItem} >
							Articles
						</a>
					</li>
					<li>
						<a href="#about" onClick={this.scrollToItem} >
							About
						</a>
					</li>
					<li>
						<a href="#visit" onClick={this.scrollToItem} >
							Visit
						</a>
					</li>
					<li>
						<a onClick={this.scrollToItem} className="login-button">
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
