import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './playlist.scss'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})
class SinglePlaylistItem extends React.Component {

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

    return(

      <div>

        <Card className={styles.listContainer}>
          <Link onClick={this.handleClick.bind(this)}>
          <CardTitle title={title} />

          </Link>

        </Card>

      </div>

    )
  }
}

SinglePlaylistItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default SinglePlaylistItem
