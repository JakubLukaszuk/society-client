import { SET_ACTIVITIES, DataActionTypes} from "../actions/types/DataActionTypes";
import { IDataState } from "../modles/activity";
import { Reducer } from 'redux';


const initialState : IDataState = {
    activities: []
}

const reducer : Reducer<IDataState> = (state: IDataState = initialState, action) => {
  switch ((action as DataActionTypes).type) {
    case SET_ACTIVITIES:
      return {
          ...state,
          activities: action.payload
        };
    default:
      return state;
  }
}

export default reducer;