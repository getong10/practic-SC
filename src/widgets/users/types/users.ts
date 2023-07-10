import { SelectProps } from "src/shared/select/select.component";

export interface ITitleUserData {
    city: string;
    school: string;
    classroom: string;
}

export interface IUserData {
    name: string;
    title: ITitleUserData;
    endTourneys: SelectProps[];
    startTourneys: SelectProps[];
}

export interface IUsersData {
    filterTourneys: SelectProps[];
    users: IUserData[];
} 