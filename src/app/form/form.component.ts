import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DangerComponent } from '../danger/danger.component';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { FormdialogComponent } from '../formdialog/formdialog.component';

interface IUser {
  id: number;
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

  onRowSelect(event: any) {
  }
  showDialog() {
    const dialogRef = this.dialog.open(FormdialogComponent,{ disableClose: false });
    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      this.users.push(result);
    
      
    });

  }

  makeIds() {
    this.users = this.users.map((user, index) => {
      user.id = index;
      console.log('index', index)
      console.log(user, 'user ')
      return user;
    });
 
  }

  openDangerModal() {
    const dialogRef = this.dialog.open(DangerComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.users = this.users.filter(
          (x) => x.id !== this.selectedUser.id
        );
       }
    });
    this.makeIds()

  }
  openEditDialog() {
    const dialogRef = this.dialog.open(EditdialogComponent);
  }

  ngOnInit(): void {}
}

