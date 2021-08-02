import { NgModule } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { GalleriaModule } from 'primeng/galleria';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';




@NgModule({
    exports: [
        ToggleButtonModule,
        GalleriaModule,
        FileUploadModule,
        TagModule,
        TableModule,
        CalendarModule,
        DialogModule,
        DynamicDialogModule,
        PasswordModule,
        DropdownModule,
        ProgressBarModule,
        SliderModule
        



    ],
  })
  export class DemoPrimeModule {}
  