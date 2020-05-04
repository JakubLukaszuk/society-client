export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export const SET_ACTIVITIES = "SET_ACTIVITIES";

interface SetActivitesAction {
    type: typeof SET_ACTIVITIES
  }

  interface FetchActivitesAction {
    type: typeof FETCH_ACTIVITIES
  }

  export type DataActionTypes = SetActivitesAction |
  FetchActivitesAction
