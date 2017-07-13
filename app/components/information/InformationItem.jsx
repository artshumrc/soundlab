import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import styles from '../posts/post_excerpt.scss'


@CSSModules(styles, {allowMultiple: true})

class InformationItem extends Component{

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

      <div>

        <Card styleName="listContainer">
          <Link to={"information/" + encodeURIComponent(name)} onClick={this.handleClick.bind(this)}>
          <CardTitle title={title} subtitle={this.props.post.info_byline.meta_value} />
          </Link>

        </Card>

      </div>

    )
  }
}

InformationItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default InformationItem
