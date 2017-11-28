import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Data';
  public employeeRecord= [
    {eName: 'sivaji', eCity: 'vizag', eSalary: 20000},
    {eName: 'venkat', eCity: 'vizag', eSalary: 20000},
    {eName: 'shiva', eCity: 'vizag', eSalary:  20000}
  ];

  public selectedEmployeeData: any;
  getRecord(data: any){
    this.selectedEmployeeData= data;
  }
}
