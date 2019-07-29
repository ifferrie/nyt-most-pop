import { fetchMostPopArticleByAllPeriod } from '../api/nytAPI'

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DATA_LOADING = 'REQUEST_DATA_LOADING'
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_FAILED = 'REQUEST_DATA_FAILED'
export const PERIOD_CHANGE = 'PERIOD_CHANGE'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'
export const DISPLAY_LIST_CHANGE = 'DISPLAY_LIST_CHANGE'

export const requestDataAction = () => (dispatch, getState) => {
  const { period } = getState().home
  dispatch({ type: REQUEST_DATA })
  dispatch({ type: REQUEST_DATA_LOADING })
  fetchMostPopArticleByAllPeriod().then((articles) => {
    dispatch({
      type: REQUEST_DATA_SUCCESS,
      payload: articles
    })
    dispatch(updateDisplayListByPeriodAndSearch(period))
  }).catch((err) => dispatch({ type: REQUEST_DATA_FAILED }))
}

export const changePeriodAction = (period) => (dispatch) => {
  dispatch({
    type: PERIOD_CHANGE,
    payload: period
  })
  dispatch(updateDisplayListByPeriodAndSearch(period))
}

export const changeSearchWordAction = (word) => (dispatch, getState) => {
  dispatch({
    type: SEARCH_CHANGE,
    payload: word
  })
}

export const updateDisplayListByPeriodAndSearch = (period, searchWord='') => (dispatch, getState) => {
  const { articles } = getState().home
  if (articles && articles.length) {
    const articlesByPeriod = articles.find((a) => a.period === period)
    let displayList = articlesByPeriod.results
    if (searchWord) {
      displayList = displayList.filter((d) => d.adx_keywords.toLowerCase().includes(searchWord.toLowerCase())? true :false)
    }
    dispatch({
      type: DISPLAY_LIST_CHANGE,
      payload: displayList
    })
  }
}
