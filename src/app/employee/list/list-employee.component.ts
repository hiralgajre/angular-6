import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { employeeService } from "../employee.service";
import { Employee } from "../../models/employee.model";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employee: Employee[];
  closeResult: string;
  constructor(private router: Router, private employeeService: employeeService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.employeeService.getUsers()
      .subscribe(data => {
        this.employee = data;
        console.log("data list", this.employee)

      });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  deleteUser(employee: Employee): void {
    this.employeeService.deleteUser(employee.id)
      .subscribe(data => {
        this.employee = this.employee.filter(u => u !== employee);
      })
  };

  editEmployee(employee: Employee): void {
    console.log("employee selected", employee)
    this.router.navigate(['/employees/details/', employee]);
  };

  addUser(): void {
    this.router.navigate(['/employees/create']);
  };
  changeStatus(id,e) {
    console.log("the selected value is " + e.target.value);
    this.employeeService.changeStatus(id,e.target.value)
    .subscribe( data => {
      console.log("status after status change",data)
    });
  }
}
