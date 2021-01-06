import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department-routing.module';
import { SharedModule } from '../shared/shared.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    DepartmentRoutingModule,
    NgbModule
  ]
})
export class DepartmentModule { }
