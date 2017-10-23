import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

import styles from './AdditionalResourceItem.scss'


@CSSModules(styles, {allowMultiple: true})

class AdditionalResourceItem extends Component{

  render() {
		const { resource } = this.props;

    return(

      <div className={styles.additionalResourceItem}>
        <Link
					to={`/resources/${resource.post_name}`}
					className={styles.link}
				>
					<i className="mdi mdi-chevron-right" />
          <span className={styles.readMore}>
						{resource.post_title}
					</span>
        </Link>
      </div>
    )
  }
}

AdditionalResourceItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default AdditionalResourceItem
