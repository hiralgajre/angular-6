import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {employeeService} from "../employee.service";
import { ActivatedRoute,Router } from "@angular/router";
import {Employee} from "../../models/employee.model";
import { Observable,timer } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  employee: Employee;
  status: any = ['0', '1']
  showAlert:boolean=false
  AlertMessage={}
  constructor(private route: ActivatedRoute,private employeeService: employeeService ,private router:Router,private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log("id val",id)
    if(id){
      this.employeeService.getUserById(id)
      .subscribe( data => {
        console.log("detail dtaa",data.name)
        this.employeeForm.patchValue({
          id: data.id,
          name: data.name,
          code: data.code,
          annualSalary: data.annualSalary,
          status: data.status
        });
        
      })
    }
   
    this.employeeForm=new FormGroup({
      id:new FormControl(),
      name: new FormControl(),
      code: new FormControl(),
      annualSalary: new FormControl(),
      status: new FormControl(),
    })
  }
  
  onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value)
    .subscribe( data => {
      console.log("after edit data",data)
      this.showAlert=true;
      this.AlertMessage=data;
      this.router.navigate(['/employees/list']);
    });
  }
}
