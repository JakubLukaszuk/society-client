export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export const START_FETCH_ACTIVITIES = "START_FETCHING_ACTIVITIES";
export const SUCCES_FETCH_ACTIVITIES = "SUCCES_FETCH_ACTIVITIES";
export const FAIL_FETCH_ACTIVITIES = "FAIL_FETCH_ACTIVITIES";
export const SET_ACTIVITIES = "SET_ACTIVITIES";


export const START_SUBMITTING = "START_SUBMITTING";
export const SUCCES_SUBMITTING = "SUCCES_SUBMITTING";
export const FAIL_SUBMITTING = "FAIL_SUBMITTING";


interface SetActivitesAction
{
    type: typeof SET_ACTIVITIES
}

interface StartFetchActivitiesAction
{
  type: typeof START_FETCH_ACTIVITIES
}

interface FailFetchActivitiesAction
{
  type: typeof FAIL_FETCH_ACTIVITIES
}

interface SuccesFetchActivitiesAction
{
  type: typeof SUCCES_FETCH_ACTIVITIES
}


interface StartSubmittingAction
{
  type: typeof START_SUBMITTING
}

interface SuccesSubmittingAction
{
  type: typeof SUCCES_SUBMITTING
}

interface FailSubmittingAction
{
  type: typeof FAIL_SUBMITTING
}

  export type DataActionTypes = SetActivitesAction |
  StartFetchActivitiesAction |
  FailFetchActivitiesAction |
  SuccesFetchActivitiesAction |
  StartSubmittingAction |
  SuccesSubmittingAction |
  FailSubmittingAction

