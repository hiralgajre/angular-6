import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from "../models/department.model";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3007/cms-api/';

  getUsers() {
    return this.http.get<Department[]>(this.baseUrl+'departments');
  }

  getUserById(id: number) {
    return this.http.get<Department>(this.baseUrl + 'department/' + id);
  }

  addDepartment(department:Department) {
    return this.http.post(this.baseUrl+'department', department);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'department/' + id);
  }
  changeStatus(id: number,status:string) {
    return this.http.get<Department>(this.baseUrl+'department/'+id+'/status/' +status);
  }
}
