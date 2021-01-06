import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class employeeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3007/cms-api/';

  getUsers() {
    return this.http.get<Employee[]>(this.baseUrl+'employees');
  }

  getUserById(id: number) {
    return this.http.get<Employee>(this.baseUrl + 'employee/' + id);
  }

  addEmployee(employee:Employee) {
    return this.http.post(this.baseUrl+'employee', employee);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'employee/' + id);
  }
  changeStatus(id: number,status:string) {
    return this.http.get<Employee>(this.baseUrl+'employee/'+id+'/status/' +status);
  }
}
