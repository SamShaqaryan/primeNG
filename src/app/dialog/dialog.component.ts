import { Component,   OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogService: DialogService) {}

  showDialog() {
    this.dialogService.open(TableComponent, {
      width: '70%',
    });
  }
  ngOnInit(): void {


  }

 

}
