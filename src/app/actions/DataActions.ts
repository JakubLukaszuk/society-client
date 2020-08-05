import * as actionTypes from "./types/DataActionTypes";
import { IActivity } from "../modles/activity";
import agent from "../api/agent";
import store from "../store";

export const fetchActiviteis = () => {
  return (dispatch : Function) => {
    dispatch(fetchActiviesStart());
    return agent.Activities.list().then(data  => {
      dispatch(fetchActiviesSucces());
      dispatch(setActivities(data));
    })
    .catch (error => {
      dispatch(fetchActivitiesFailure(error))
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

export const fetchActivitiesFailure = (error: object) =>
{
  return {
    type: actionTypes.FAIL_FETCH_ACTIVITIES,
    payload: error
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
    .catch(error=> dispatch(failSubmitting(error)));
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
      .catch(error=> dispatch(failSubmitting(error)));
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

export const loadActivity =  (id: string) => {
  return async (dispatch : Function) => {
    let activity = getActivity(id);
    if(activity){
      return(dispatch : Function) => {
        dispatch(selectActivity(activity));
      }
    }
    else{
      dispatch(fetchActiviesStart());
      try{
        activity = await agent.Activities.details(id);
          dispatch(fetchActiviesSucces());
          dispatch(selectActivity(activity));
      }
      catch (error){
        dispatch(fetchActivitiesFailure(error));
      }
    }
  }
}

export const selectActivity = (data?: IActivity) =>{
  return {
    type: actionTypes.SELECT_ACTIVITY,
    payload: data
  }
}

const getActivity = (id: string) => {
  return store.getState().activities.filter( activity =>
    activity.id === id)[0];
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

export const failSubmitting = (error: object) => {
  return {
    type: actionTypes.FAIL_SUBMITTING,
    payload: error
  }
}
