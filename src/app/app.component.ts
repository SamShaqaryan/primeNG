import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Users } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


user:Users[] =[]


  constructor(private userService:UserService) { }

  ngOnInit() {


   this.userService.getinfo().subscribe(res=> {
    this.user = res
    console.log(this.user)
   })

   
  }
 

}
