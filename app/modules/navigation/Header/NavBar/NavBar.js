import React, {PropTypes} from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules'
import autoBind from 'react-autobind';

import styles from './NavBar.scss';


@CSSModules(styles, {allowMultiple: true})
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		};

		autoBind(this);
	}

	handleMouseEnter(){
		this.setState({
			hover: true,
		});
	}

	handleMouseLeave(){
		this.setState({
			hover: false,
		});
	}

	render() {
		const { toggleAuthModal, userId, logout } = this.props;
		const { hover } = this.state;

		return (
			<Headroom
				styleName="navbar"
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
			>
				<div className={styles.navHeader}>
					<Link to="/">
						<div className={styles.siteLogo}>
							<div className={`${styles.siteLogo1} ${hover ? styles.siteLogo1Hover : ''}`} />
							<div className={styles.siteLogo2} />
							<div className={styles.siteLogo3} />
							<div className={styles.siteLogo4} />
							<div className={`${styles.siteLogo5} ${hover ? styles.siteLogo5Hover : ''}`} />
						</div>
						<h2 className={styles.siteTitle}>
							Sound Lab
						</h2>
					</Link>
				</div>
				<ul styleName="nav">
					<li>
						<Link styleName="navLink" to={'/audio'}>
							Waves
						</Link>
					</li>
					<li>
						<Link styleName="navLink" to={'/resources'}>
							Resources
						</Link>
					</li>
					<li>
						<Link styleName="navLink" to={'/about'}>
							About
						</Link>
					</li>
					{ userId ?
						<li>
							<Link styleName="navLink" to={'/'}>
								Profile
							</Link>
						</li>
					:
						<li>
							<Link
								to={'/'}
								styleName="navLink"
								onClick={toggleAuthModal}
							>
								Join / Login
							</Link>
						</li>
					}
				</ul>
			</Headroom>
		);
	}
}

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

export default NavBar;
