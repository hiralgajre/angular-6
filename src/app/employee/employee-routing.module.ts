import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create/create-employee.component';
import { ListEmployeeComponent } from './list/list-employee.component';

const routes: Routes = [
  { path:'employees',children:[
    { path: 'list', component: ListEmployeeComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'details/:id', component: CreateEmployeeComponent },
    { path: '',redirectTo:'/list',pathMatch:'full'}
  ]}
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
