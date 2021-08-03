import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.scss'],
})
export class FormdialogComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(private dialogRef:MatDialogRef<FormdialogComponent>, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [null, [Validators.required]],
      date:[null,[Validators.required]]
    });
  }

  submit(){
    this.dialogRef.close(this.formGroup.value)
  }
}
