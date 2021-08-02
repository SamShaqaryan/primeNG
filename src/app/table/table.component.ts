import { Component, OnInit } from '@angular/core';
import { Comments, Posts, Users, UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  posts: Posts[] = []
  user: Users[] = []
 comments:Comments[]=[] 


  constructor(private userService: UserService) {



    this.userService.getInfo().subscribe(res => {
      this.user = res
      
    })
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

  ngOnInit(): void {
  }

}
