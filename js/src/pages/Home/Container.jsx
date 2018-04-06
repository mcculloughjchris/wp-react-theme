import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePresentation from './Presentation.jsx'

import * as postsActions from '../../ducks/posts.js'

class HomeContainer extends React.Component {
  componentDidMount () {
    this.props.postsActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.postsActions.set(response.data)
        }
      })
  }

  render () {

    return (
      <HomePresentation posts={this.props.posts.data} />
    )
  }
}

HomeContainer.defaultProps = {
  posts: []
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)