import axios from "axios";
import { SET_ACTIVITIES } from "./types/DataActionTypes";
import { IActivity } from "../modles/activity";

export function fetchActiviteis() {
  return function(dispatch : Function) {
    return axios.get("http://localhost:5000/api/activities").then(({ data }) => {
      dispatch(setActivities(data));
    });
  };
}

const setActivities = ( data : IActivity) => {
  return {
    type: SET_ACTIVITIES,
    payload: data
  };
}