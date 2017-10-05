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

class ResourceItem extends Component{

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

    const resourceItemTitle = {
      fontSize: '28px',
      lineHeight: '22px',
      fontFamily: 'serif'
    }

    const postCardTitleSection = {
      display: 'inline-block',
      verticalAlign: 'super'
    }

    const resourceContentText = {
      fontSize: '18px',
      color: '#353131',
      fontWeight: '100',
      padding: '0px 0px 20px 0px'
    }

    return(

      <div>

        <Card styleName="resource-item">
          <Link to={"resources/" + encodeURIComponent(name)} onClick={this.handleClick.bind(this)}>
          <CardTitle
            styleName="resource-card-item-title"
            title={title}
            titleStyle={resourceItemTitle}
          />
          <CardText style={resourceContentText}>
            {content}
          </CardText>
          <a styleName="read-more" href=""><KeyboardArrowRight />Read more</a>
          </Link>

        </Card>

      </div>

    )
  }
}

ResourceItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default ResourceItem
