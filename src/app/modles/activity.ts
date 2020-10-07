export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date?: Date | null;
    city: string;
    placeOfEvent: string;
}

export interface IDataState
{
    activities: IActivity[];
    isLoading: boolean;
    isSubmitting: boolean;
    selectedActivity?: IActivity;
    error?: object | null;
}