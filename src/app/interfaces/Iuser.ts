export interface Iuser{
    uuid: string;
    name: string;
    email:string;
    password: string;
}


export interface IuserCreate extends Omit<Iuser, 'uuid'>{}
