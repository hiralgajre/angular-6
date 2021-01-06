import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateDepartmentComponent } from './create/create-department.component'
import { ListDepartmentComponent } from './list/list-department.component'

const routes: Routes = [
  { path:'departments',children:[
    { path: 'list', component: ListDepartmentComponent },
    { path: 'create', component: CreateDepartmentComponent },
    { path: 'details/:id', component: CreateDepartmentComponent },
  ]}
  
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
