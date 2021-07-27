import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Users {
  id:number,
  name: string,
username:string,
email:string
}
@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http:HttpClient) { }

   getinfo(){
     return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
   


  }






}
