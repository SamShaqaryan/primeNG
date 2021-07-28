import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { Posts, UserService } from './user.service';
import { Users } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  posts: Posts[] = []
  user: Users[] = []


  constructor(private userService: UserService) { }


  ngOnInit() {


    this.userService.getInfo().subscribe(res => {
      this.user = res
      console.log(this.user)
    })


  }

  getPosts(event: any) {
    this.posts = [];
    this.userService.getPosts(event.data.id).subscribe(res => {
      this.posts = res;
      console.log(event)
    })
  }



 


}
