import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
//import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
//import styles from '../posts/post_excerpt.scss'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import styles from './resources.scss'


@CSSModules(styles, {allowMultiple: true})

class AdditionalResourceItem extends Component{

  componentDidMount() {
    const { index } = this.props
  }

  handleClick(e) {
    e.preventDefault()
    const target = e.currentTarget.href
    browserHistory.push(target)
  }


  render() {
    const { post_content: content, post_title: title, post_name: name } = this.props.post

    return(

      <div styleName="additional-resources-title-container">

        <Link to={"resources/" + encodeURIComponent(name)}>
          <span styleName="read-more"><KeyboardArrowRight />{title}</span>
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
