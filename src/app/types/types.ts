export interface IDataForm {
    value: string | boolean;
    name: string;
}

export interface IUpcomingTourneys {
    data: string;
    typeTourney: string;
    participants: string[];
    countParticipants: number;
}