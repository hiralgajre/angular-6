import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { EmployeeModule } from '../app/employee/employee.module'
import { DepartmentModule } from './department/department.module';
//import employeeservice
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListDepartmentComponent } from './department/list/list-department.component';
import { CreateDepartmentComponent } from './department/create/create-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDepartmentComponent,
    CreateDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmployeeModule,
    DepartmentModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
