import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Users {
  id: string,
  name:string,
username:string,
email:string,
address: {
  street:string,
  suite:string,
  city:string,
  
}}
export interface Posts {
  userId:number,
  id:number,
  title:string,
  body:string
}

export interface Comments {
  postId:number,
  id:number,
  email:string,
  body:string
}



@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http:HttpClient) { }

   getInfo(){
     return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
   
  }

getPosts (id:any){
  return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/user/'+id+'/posts?_limit=3')
}

getComments (comment:any) {
  return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/posts/'+comment +'/comments?_limit=3')
}



}
