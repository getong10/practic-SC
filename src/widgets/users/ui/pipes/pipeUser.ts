import { Pipe, PipeTransform } from "@angular/core";
import { IUserData } from "../../types/users";

@Pipe({
    name: 'pipeUser'
})
export class pipeUser implements PipeTransform {
    transform(usersData: IUserData[], search: string): IUserData[] {
        return usersData.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }
}