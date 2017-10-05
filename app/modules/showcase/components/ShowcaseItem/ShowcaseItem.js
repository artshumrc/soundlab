import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './showcase.scss'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})

export default class ShowcaseList extends Component{
  static propTypes = {
    post: React.PropTypes.object,
  }

  render() {
    const { post_content: content } = this.props.post

    return(

      <div>

        <Card styleName="listContainer">

          <CardTitle title={this.props.post.post_title} subtitle={this.props.post.byline.meta_value} />

          <CardText>
            <PostContent content={content}/>
          </CardText>

        </Card>

      </div>

    )
  }
}
