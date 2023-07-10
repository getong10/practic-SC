import { IUpcomingTourneys } from "src/app/types/types";

export interface IHomeData {
    completedTourney: number;
    upcomingTourney: number;
    upcomingTourneysArr: IUpcomingTourneys[]
}