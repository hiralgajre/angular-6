import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from "../department.service";
import { Department } from "../../models/department.model";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  department: Department[];
  closeResult: string;
  departmentForm: FormGroup;
  status: any = ['0', '1']
  showAlert: boolean = false
  AlertMessage = {}
  showModal: boolean;
  content: string;
  title: string;
  constructor(private router: Router, private route: ActivatedRoute, private departmentService: DepartmentService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.departmentService.getUsers()
      .subscribe(data => {
        this.department = data;
        console.log("data list", this.department)

      });
    this.departmentForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      code: new FormControl(),
      annualSalary: new FormControl(),
      status: new FormControl(),
    })
  }
  show(id:number) {
    console.log("id modal",id)
    this.showModal = true; // Show-Hide Modal Check
    this.title = "Add Form";    // Dynamic Data
    if (id!=0) {
      this.title = "Edit Form";    // Dynamic Data
      this.departmentService.getUserById(id)
        .subscribe(data => {
          console.log("detail dtaa", data.name)
          this.departmentForm.patchValue({
            id: data.id,
            name: data.name,
            status: data.status
          });

        })
    }else{
      this.departmentForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        code: new FormControl(),
        annualSalary: new FormControl(),
        status: new FormControl(),
      })
    }
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  deleteUser(department: Department): void {
    this.departmentService.deleteUser(department.id)
      .subscribe(data => {
        this.department = this.department.filter(u => u !== department);
      })
  };

  editEmployee(department: Department): void {
    console.log("department selected", department)
    this.router.navigate(['/departments/details/', department]);
  };

  addUser(): void {
    this.router.navigate(['/departments/create']);
  };
  changeStatus(id, e) {
    console.log("the selected value is " + e.target.value);
    this.departmentService.changeStatus(id, e.target.value)
      .subscribe(data => {
        console.log("status after status change", data)
      });
  }
  onSubmit() {
    this.departmentService.addDepartment(this.departmentForm.value)
      .subscribe(data => {
        console.log("after edit data", data)
        this.showAlert = true;
        this.AlertMessage = data;
        this.router.navigate(['/employees/list']);
      });
  }
}
