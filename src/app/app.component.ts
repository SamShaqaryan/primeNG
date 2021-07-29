import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { Comments, Posts, UserService } from './user.service';
import { Users } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  posts: Posts[] = []
  user: Users[] = []
 comments:Comments[]=[] 

  constructor(private userService: UserService) {



    this.userService.getInfo().subscribe(res => {
      this.user = res
      
    })
   }


  ngOnInit() {

  


  }

  getPosts(event: any) {
    this.posts = [];
    this.userService.getPosts(event.data.id).subscribe(res => {
      this.posts = res;
    })
  }


  getComments(event:any) {
    console.log(event)
    this.comments=[]
    this.userService.getComments(event.data.id ).subscribe(responese=>{
      this.comments=responese
      console.log(this.comments)
      
    })

  }


 


}
