import { SET_ACTIVITIES } from "./types/DataActionTypes";
import { IActivity } from "../modles/activity";
import agent from "../api/agent";

export const fetchActiviteis = () => {
  return (dispatch : Function) => {
    return agent.Activities.list().then(data  => {
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