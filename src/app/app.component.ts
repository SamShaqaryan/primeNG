import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Comments, Posts, UserService } from './user.service';
import { Users } from './user.service';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  name:string=''
  constructor(private userService: UserService,public dialog: MatDialog) {
 

    

        this.userService.getInfo().subscribe(res => {
          this.user = res
          
        })
       }


      //  value:number = 0

  posts: Posts[] = []
  user: Users[] = []
 comments:Comments[]=[] 
 dateValue:Date = new Date()
 

  getComments(event:any) {
    this.comments=[]
    this.userService.getComments(event.data.id ).subscribe(responese=>{
      this.comments=responese
      
    })
  }

  getPosts(event: any) {
    this.posts = [];
    this.userService.getPosts(event.data.id).subscribe(res => {
      this.posts = res;
    })
  }



ngOnInit(){

}

openDialog() {
  const dialogConfig = new MatDialogConfig();
  
  dialogConfig.width = "60%";
  const dialogref = this.dialog.open(DialogComponent, {data: {name :this.name}
  });

  dialogref.afterClosed().subscribe(result=>{
    console.log(result, 'result')
    this.name  = result.name
  })
}

}
