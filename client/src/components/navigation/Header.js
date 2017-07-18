import React from 'react';
import Headroom from 'react-headroom';
import scrollToElement from 'scroll-to-element';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToItem = this.scrollToItem.bind(this);
  }

  scrollToItem(event) {
    event.preventDefault();
    scrollToElement(event.target.hash, {offset: -130});
  }

	render() {
		return (
			<Headroom>
				<div className="nav-header">
					<i className="mdi mdi-bars left-menu-toggle-icon" />
					<h2 className="site-title">
						orphe.us
					</h2>
				</div>
				<ul role="nav">
					<li>
						<a href="#services" onClick={this.scrollToItem} >
							Services
						</a>
					</li>
					<li>
						<a href="/community" onClick={this.scrollToItem} >
							Community
						</a>
					</li>
					<li>
						<a href="#about" onClick={this.scrollToItem} >
							About
						</a>
					</li>
					<li>
						<a onClick={this.scrollToItem} className="login-button">
							Sign Up / In
						</a>
					</li>
					<li>
						<a href="/search">
							<i className="mdi mdi-search search-icon" />
						</a>
					</li>
				</ul>
			</Headroom>
		);
	}
}
