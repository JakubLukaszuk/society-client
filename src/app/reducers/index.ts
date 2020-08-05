import { SET_ACTIVITIES, DataActionTypes,SUCCES_FETCH_ACTIVITIES, FAIL_FETCH_ACTIVITIES, START_FETCH_ACTIVITIES, START_SUBMITTING, SUCCES_SUBMITTING, FAIL_SUBMITTING, SELECT_ACTIVITY } from "../actions/types/DataActionTypes";
import { IDataState } from "../modles/activity";
import { Reducer } from 'redux';


const initialState: IDataState = {
  activities: [],
  isLoading: false,
  isSubmitting: false,
  selectedActivity: undefined,
  error: null
}

const reducer: Reducer<IDataState> = (state: IDataState = initialState, action) => {
  switch ((action as DataActionTypes).type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    case SELECT_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload
      }
    case START_FETCH_ACTIVITIES:
      return {
        ...state,
        isLoading: true
      }
    case SUCCES_FETCH_ACTIVITIES:
      return {
        ...state,
        isLoading: false
      }
    case FAIL_FETCH_ACTIVITIES:
      return {
        ...state,
        isLoading: false,
        error: action.payload

      }
    case START_SUBMITTING:
      return {
        ...state,
        isSubmitting: true
      }
    case SUCCES_SUBMITTING:
      return {
        ...state,
        isSubmitting: false
      }
    case FAIL_SUBMITTING:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;