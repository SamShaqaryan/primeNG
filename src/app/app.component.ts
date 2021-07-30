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
  constructor(public dialog: MatDialog) {
 
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
