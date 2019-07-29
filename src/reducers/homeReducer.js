import {
  REQUEST_DATA_SUCCESS,
  UPDATE_EVENT_INDEX
} from '../actions/homeAction'

export default (state = {
  articles: []
}, action) => {
 switch (action.type) {
  case REQUEST_DATA_SUCCESS:
   return {
    ...state,
    articles: action.payload
   }
  default:
   return state
 }
}
