import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DangerComponent } from '../danger/danger.component';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { LocalStorageService } from '../local-storage.service';

export interface IUser {
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
  users: IUser[] = this.LocalStorageService.data;
  selectedUser!: IUser;
  constructor(
    public dialog: MatDialog,
    private LocalStorageService: LocalStorageService
  ) {
    
    LocalStorageService.getChanges.subscribe(res=>{
      this.users = this.LocalStorageService.data;
    })
  }

  onRowSelect(event: any) {}
  showDialog() {
    const dialogRef = this.dialog.open(FormdialogComponent, {
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.LocalStorageService.create(result);
     
    });
  }

  openDangerModal() {
    const dialogRef = this.dialog.open(DangerComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
       this.LocalStorageService.delete(this.selectedUser.id)
      }
    });
  }


  openEditDialog() {
    this.dialog
      .open(EditdialogComponent, {
        data: this.selectedUser,
        disableClose: false,
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result, "result")
       this.LocalStorageService.edit(result);
      });
  }

  ngOnInit(): void {}
}
