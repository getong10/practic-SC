export interface IRegisterBody {
    [k: string]: string | boolean;
    username: string;
    surName: string;
    patronymic: string;
    password: string;
    repeatPassword: string;
    email: string;
    cities: string;
    schools: string;
    classSchools: string;
    getNews: boolean;
}

export interface IRequestData {
    role: string;
    data: IRegisterBody;
}