import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../form/form.component';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {

  public formGroup!: FormGroup;
  constructor(private dialogRef:MatDialogRef<EditdialogComponent>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:any) {
    console.log(this.data, 'data')
this.formGroup = this.formBuilder.group({
  name:[this.data.name, Validators.required],
  lastName:[this.data.lastName,Validators.required ],
  age:[this.data.age,Validators.required ],
  
})
  }

  ngOnInit():void {
    
  }
  submit(){
    this.formGroup.value.id= this.data.id
    this.dialogRef.close(this.formGroup.value)
  }

}
