import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) =>{
        this.employees = employees;
      },
      error: (res) =>{
        console.log(res)
      }
    })
  }

  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-email', 'demo-phone', 'demo-salary', 'demo-department','demo-edit'];
  dataSource = this.employees;

}
