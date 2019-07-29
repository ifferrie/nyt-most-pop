import {
  REQUEST_DATA_SUCCESS,
  PERIOD_CHANGE,
  SEARCH_CHANGE,
  DISPLAY_LIST_CHANGE
} from '../actions/homeAction'

export default (state = {
  articles: [],
  displayList: [],
  period: '1',
  search: ''
}, action) => {
 switch (action.type) {
  case REQUEST_DATA_SUCCESS:
   return {
    ...state,
    articles: action.payload
   }
  case PERIOD_CHANGE:
   return {
    ...state,
    period: action.payload
   }
  case SEARCH_CHANGE:
   return {
    ...state,
    search: action.payload
   }
  case DISPLAY_LIST_CHANGE:
   return {
    ...state,
    displayList: action.payload
   }
  default:
   return state
 }
}
