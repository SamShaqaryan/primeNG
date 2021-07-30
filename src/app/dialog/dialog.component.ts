import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
public formGroup!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data:{name:string}, private fb:FormBuilder) { }
  ngOnInit(): void {

    this.formGroup= this.fb.group({
      name: [null, [Validators.required]],
    })
  }

  submit(){
    this.data  = this.formGroup.value
    console.log(this.data)
  }

}
