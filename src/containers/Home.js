import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  requestDataAction,
  changePeriodAction,
  changeSearchWordAction,
  updateDisplayListByPeriodAndSearch
} from '../actions/homeAction'
import Article from '../components/Article'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'
import PeriodDropDown from '../components/PeriodDropDown'
import SearchSection from '../components/SearchSection'
import './Home.css'

class Home extends Component {

  componentDidMount() {
    this.props.requestDataAction()
  }

  onPeriodChange(e) {
    this.props.changePeriodAction(e.target.value)
  }

  onSearchWordChange(e) {
    this.props.changeSearchWordAction(e.target.value)
  }

  onSearch(period, word) {
    this.props.updateDisplayListByPeriodAndSearch(period, word)
  }

  render() {
    const {displayList, articles, period, search} = this.props
    if (articles.length) {
      return (
        <div className="row articles-block">
          <div className="col-12">
            <div className="row filter-section">
              <PeriodDropDown onPeriodChange={this.onPeriodChange.bind(this)} />
              <SearchSection onSearchWordChange={this.onSearchWordChange.bind(this)}
                search={search}
                period={period}
                onSearch={this.onSearch.bind(this)}
                />
            </div>
          </div>
          <div >
            <div className="row">
              {
                displayList.length? displayList.map((a, i) => <Article data={a} key={i}/>) : <NotFound />
              }
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
  search: state.home.search,
  displayList: state.home.displayList
})

const mapDispatchToProps = dispatch => ({
 requestDataAction: () => dispatch(requestDataAction()),
 changePeriodAction: (p) => dispatch(changePeriodAction(p)),
 changeSearchWordAction: (word) => dispatch(changeSearchWordAction(word)),
 updateDisplayListByPeriodAndSearch: (period, word) => dispatch(updateDisplayListByPeriodAndSearch(period, word))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
