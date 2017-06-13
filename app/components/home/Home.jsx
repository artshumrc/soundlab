import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import Header from '../header/header'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    console.log(this.props.data.posts)
    if (this.props.data.posts) {
      return (
      <MuiThemeProvider>
      <div>
        {/*<nav className={styles.siteSideNav}>*/}
        <Drawer
          open={this.state.open}
          width={200}
          >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>



            <div  className={styles.contentContainer}>
              <div className={styles.showcaseContainer}>

                {this.props.data.posts.map((post) =>
                <ShowcaseList key={post.id} post={post} />
                )}

              </div>
              <div className={styles.userContainer}>
                <h2 className={styles.userNames}>Othello</h2>
                <h2 className={styles.userNames}>Lady Macbeth</h2>
                <h2 className={styles.userNames}>Claudius</h2>
                <h2 className={styles.userNames}>Puck</h2>
                <h2 className={styles.userNames}>Horatio</h2>
              </div>
            </div>

      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const HomeQuery = gql`
  query HomeQuery {
    posts {
      id
      post_title
      post_name
      post_content
      post_excerpt
      thumbnail
    }
  }
`

const HomeWithData = graphql(HomeQuery)(Home)

export default HomeWithData
