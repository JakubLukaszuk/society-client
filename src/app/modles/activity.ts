export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    placeOfEvent: string;
}

export interface IDataState
{
    activities: IActivity[];
}