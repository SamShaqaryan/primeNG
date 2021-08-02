import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DangerComponent } from '../danger/danger.component';
import { FormdialogComponent } from '../formdialog/formdialog.component';

interface IUser {
  name: string;
  lastName: string;
  age: number;
  date: Date;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  users: IUser[] = [];
  selectedUser!: IUser;
  constructor(public dialog: MatDialog) {}

  onRowSelect(event:any) {
    console.log(event)
  }
  showDialog() {
    const dialogRef = this.dialog.open(FormdialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.users.push(result) ;
    });
  }

  openDangerModal(){
    const dialogRef = this.dialog.open(DangerComponent );

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.users = this.users.filter(x=>{x.name!==this.selectedUser.name}) 
      }
    });
  }


  ngOnInit(): void {}
}
