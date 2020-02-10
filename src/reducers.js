import * as actions from "./actions";
import {updateFavourite} from './utils/helperFunctions'

const intialState = {
  people: [],
  loading: false,
  error: null
};

function peopleReducer(state = intialState, action) {
  switch (action.type) {
    case actions.FETCH_PEOPLE_STARTED:
      return {
        ...state.state,
        loading: true
      }
      case actions.FETCH_PEOPLE_SUCCESS:
        return {
          ...state.state,
          people: [...action.payload],
          loading: false
        }
        case actions.FETCH_PEOPLE_FAILURE:
          return {
            ...state.state,
            error: action.payload,
            loading: false
          }
      case actions.ADD_FAVOURITE:
        return{
          ...state,
          people: updateFavourite(state,action,true)
        }
        case actions.REMOVE_FAVOURITE:
          return{
            ...state,
            people: updateFavourite(state,action,false)
          }
      default:
        return state
  }
}

export default peopleReducer;