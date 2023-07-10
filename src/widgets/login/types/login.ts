export interface ILoginBody {
    [key: string]: string | boolean;
    email: string;
    password: string;
}