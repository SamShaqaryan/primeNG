import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-danger',
  templateUrl: './danger.component.html',
  styleUrls: ['./danger.component.scss']
})
export class DangerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{}) { }

  ngOnInit(): void {
   console.log(this.data,'from danger component')
  }

 

}
