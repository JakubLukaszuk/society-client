import axios from "axios";
import { SET_ACTIVITIES } from "./types/DataActionTypes";
import { IActivity } from "../modles/activity";

export const fetchActiviteis = () => {
  return (dispatch : Function) => {
    return axios.get<IActivity []>("http://localhost:5000/api/activities").then(({ data }) => {
      dispatch(setActivities(data));
    });
  };
}

const setActivities = ( data : IActivity[]) => {
  let activities: Array<IActivity> = [];
  data.forEach(activity => {
    activity.date = activity.date.split('.')[0];
    activities.push(activity);
  })
  return {
    type: SET_ACTIVITIES,
    payload: activities
  };
}

export const setActivitiesArr = (data: IActivity []) => {
  return {
    type: SET_ACTIVITIES,
    payload: data
  };
}