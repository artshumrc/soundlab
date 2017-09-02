import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { SinglePlaylistItem } from './SinglePlaylistItem'
import { browserHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './playlist.scss'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})
class PlaylistItem extends React.Component {

  componentDidMount() {
    const { index } = this.props
  }

  handleClick(e) {
    e.preventDefault()
    const target = e.currentTarget.href
    browserHistory.push(target)
  }


  render() {
    const { post_title: title, post_name: name } = this.props.post
    console.log('queue: ' + this.props.post.queue.meta_value)
    return(

      <div>

        <Card className={styles.listContainer}>
          <Link onClick={this.handleClick.bind(this)}>
          <CardTitle title={title} subtitle={this.props.post.post_title} />
          <CardText>

            {this.props.post.queue.meta_value}
          </CardText>
          </Link>

        </Card>

      </div>

    )
  }
}

PlaylistItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default PlaylistItem
