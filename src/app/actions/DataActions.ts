import * as actionTypes from "./types/DataActionTypes";
import { IActivity } from "../modles/activity";
import agent from "../api/agent";

export const fetchActiviteis = () => {
  return (dispatch : Function) => {
    dispatch(fetchActiviesStart());
    return agent.Activities.list().then(data  => {
      dispatch(fetchActiviesSucces());
      dispatch(setActivities(data));
    })
    .catch (error => {
      console.log(error);
    });
  };
}

export const fetchActiviesStart = () => {
  return {
    type: actionTypes.START_FETCH_ACTIVITIES
  }
}

export const fetchActiviesSucces = () => {
  return {
    type: actionTypes.SUCCES_FETCH_ACTIVITIES
  }
}

export const fetchActivitiesFailure = () =>
{
  return {
    type: actionTypes.FAIL_FETCH_ACTIVITIES
  }
}

const setActivities= ( data : IActivity[]) => {
  let activities: Array<IActivity> = [];
  data.forEach(activity => {
    activity.date = activity.date.split('.')[0];
    activities.push(activity);
  })
  return {
    type: actionTypes.SET_ACTIVITIES,
    payload: activities
  };
}

export const createActivity = (activity: IActivity) => {
  return (dispatch : Function) => {
    dispatch(startSubmitting());
    return agent.Activities.create(activity).then(() =>
    {
       dispatch(succesSubmitting())
    })
    .catch(errror=> {});
  }
}

export const updateActivity = (activity: IActivity) => {
  return (dispatch : Function) => {
    dispatch(startSubmitting());
    return agent.Activities.update(activity).then(() =>
      {
        dispatch(succesSubmitting())
        dispatch(fetchActiviteis())
      })
      .catch(errror=> {});
  };
}

export const deleteActivity = (id: string) => {
  return (dispatch : Function) => {
    dispatch(startSubmitting());
    return agent.Activities.delete(id).then(() =>
    {
      dispatch(succesSubmitting())
    })
  }
}

export const setActivitiesArr = (data: IActivity []) => {
  return {
    type: actionTypes.SET_ACTIVITIES,
    payload: data
  };
}

export const startSubmitting = () => {
  return {
    type: actionTypes.START_SUBMITTING
  }
}

export const succesSubmitting = () => {
  return {
    type: actionTypes.SUCCES_SUBMITTING
  }
}

export const failSubmitting = () => {
  return {
    type: actionTypes.FAIL_SUBMITTING
  }
}
