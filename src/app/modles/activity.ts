export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    city: string;
    placeOfEvent: string;
}

export interface IDataState
{
    activities: IActivity[];
    isLoading: boolean;
    isSubmitting: boolean;
    selectedActivity?: IActivity;
}