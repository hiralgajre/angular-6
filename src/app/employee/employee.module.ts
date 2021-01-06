import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from './list/list-employee.component';
import { CreateEmployeeComponent } from './create/create-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule,
    NgbModule
  ]
})
export class EmployeeModule { }
