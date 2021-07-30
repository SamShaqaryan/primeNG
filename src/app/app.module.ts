import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DemoMaterialModule } from './shared/mat.module';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    PasswordModule,
    FormsModule,
    ToggleButtonModule,
    GalleriaModule,
    FileUploadModule,
    TagModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    NgbModule,
    DropdownModule,
    ReactiveFormsModule,
    DemoMaterialModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
