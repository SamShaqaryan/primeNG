import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DemoMaterialModule } from './shared/mat.module';
import { TableComponent } from './table/table.component';
import { DemoPrimeModule } from './shared/prime.module';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { FormdialogComponent } from './formdialog/formdialog.component';
import { AppRoutingModule } from './app-routing.module';
import { DangerComponent } from './danger/danger.component';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TableComponent,
    MenuComponent,
    FormComponent,
    FormdialogComponent,
    DangerComponent,
    EditdialogComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    DemoPrimeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
