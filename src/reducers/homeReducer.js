import {
  REQUEST_DATA_SUCCESS,
  PERIOD_CHANGE
} from '../actions/homeAction'

export default (state = {
  articles: [],
  period: '1'
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
  default:
   return state
 }
}
