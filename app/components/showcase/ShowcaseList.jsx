import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './showcase.scss'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'




export default class ShowcaseList extends Component{
  static propTypes = {
    post: React.PropTypes.object,
  }

  render() {
    const { post_content: content } = this.props.post

    return(

      <div>
        <Card className={styles.showcaseContainer}>
          <CardTitle title={this.props.post.post_title} subtitle="Card subtitle" />
          <CardText>
            <PostContent content={content}/>
          </CardText>
          <h6>{this.props.post.byline}</h6>
        </Card>



      </div>

    )
  }
}
