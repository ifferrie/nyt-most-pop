import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestDataAction, changePeriodAction } from '../actions/homeAction'
import Article from '../components/Article'
import Loader from '../components/Loader'
import './Home.css'

class Home extends Component {

  componentDidMount() {
    this.props.requestDataAction()
  }

  onPeriodChange(p) {
    this.props.changePeriodAction(p)
  }

  render() {
    const {articles, period} = this.props
    const aticlesByPeriod = articles.find((a) => a.period === period)
    if (aticlesByPeriod && aticlesByPeriod.results.length) {
      return (
        <div className="row articles-block">
          <div className="col-12 dropdown-block">
            <div>
              Most Viewed by Time Period
              <select style={{marginLeft: '1rem'}} onChange={(e) => this.onPeriodChange(e.target.value)}>
                <option value="1">1 day</option>
                <option value="7">7 days</option>
                <option value="30">30 days</option>
              </select>
              
            </div>

          </div>
          <div >
            <div className="row">
              {aticlesByPeriod.results.map((a, i) => <Article data={a} key={i}/>)}
            </div>
          </div>
        </div>
      )
    }
    return (<Loader />)
  }
}

const mapStateToProps = state => ({
  articles: state.home.articles,
  period: state.home.period,
})

const mapDispatchToProps = dispatch => ({
 requestDataAction: () => dispatch(requestDataAction()),
 changePeriodAction: (p) => dispatch(changePeriodAction(p))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
