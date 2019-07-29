import { fetchMostPopArticleByAllPeriod } from '../api/nytAPI'

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DATA_LOADING = 'REQUEST_DATA_LOADING'
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_FAILED = 'REQUEST_DATA_FAILED'
export const PERIOD_CHANGE = 'PERIOD_CHANGE'

export const requestDataAction = () => dispatch => {
  dispatch({ type: REQUEST_DATA })
  dispatch({ type: REQUEST_DATA_LOADING })
  fetchMostPopArticleByAllPeriod().then((articles) => {
    dispatch({
      type: REQUEST_DATA_SUCCESS,
      payload: articles
    })
  }).catch((err) => dispatch({ type: REQUEST_DATA_FAILED }))
}

export const changePeriodAction = (period) => dispatch => {
  dispatch({
    type: PERIOD_CHANGE,
    payload: period
  })
}
