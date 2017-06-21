import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from '../posts/post_excerpt.scss'
//import { Link } from 'react-router'
import { browserHistory } from 'react-router'
//import CSSModules from 'react-css-modules'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


class GenreItem extends Component{


  render() {
    const { post_title: title } = this.props.post

    return(

      <div>

        <Card className={styles.listContainer}>

          <CardTitle title={title} subtitle={this.props.post.byline.meta_value} />

        </Card>

      </div>

    )
  }
}

GenreItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default GenreItem
