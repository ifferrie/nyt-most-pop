import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestDataAction, updateEventIndexAction } from '../actions/homeAction'
import Member from '../components/Member'
import Loader from '../components/Loader'
import './Home.css'

class Home extends Component {

  componentDidMount() {
    this.props.requestDataAction()
  }

  render() {
    return (
      <Loader />
    )
  }
}

const mapStateToProps = state => ({
  articles: state.home.articles,
})

const mapDispatchToProps = dispatch => ({
 requestDataAction: () => dispatch(requestDataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
