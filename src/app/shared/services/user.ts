import { Injectable } from '@angular/core';
import { Iuser, IuserCreate } from 'src/app/interfaces/Iuser';
import {Storage } from  '../providers/storage/storage';
import { Uuid } from '../providers/uuid/uuid';
@Injectable({
  providedIn: 'root'
})
export class User {
   constructor(
    private readonly storsgeSrv: Storage, 
    private readonly uuidSrv: Uuid,
  ){}

register(User: IuserCreate): Iuser{
  const users = this.storsgeSrv.get<Iuser[]>('users') || [];
  const isEmailExist = users.find((u)=>u.email === User.email);
  if(isEmailExist){
    throw new Error('Email already registred');
    
  }
  const newUser:Iuser={
    uuid: this.uuidSrv.get(),
    ...User,
    password: atob(User.password),
  }
  users.push(newUser);
  this.storsgeSrv.set('users', JSON.stringify(users));

  return newUser;
}

}
