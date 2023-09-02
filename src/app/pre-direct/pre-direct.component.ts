import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-pre-direct',
  templateUrl: './pre-direct.component.html',
  styleUrls: ['./pre-direct.component.css']
})
export class PreDirectComponent {

  courses:string[] =["html", "Css", "js", "jQuery", "Angular", "React"];

  selectedCourses:string="";

  e1:Employee = new Employee(1, "john", 90000, 9000);
  e2:Employee = new Employee(2, "kiran", 90000, 9000);
  e3:Employee = new Employee(3, "Tanu", 90000, 9000);
  e4:Employee = new Employee(4, "Prem", 90000, 9000);
  e5:Employee = new Employee(5, "Anu", 90000, 9000);

  employees:Employee[] = [this.e1, this.e2, this.e3, this.e4, this.e5];

  selectedEMpname:string = ""

  selectedEmployee:Employee = new Employee;

  isChecked:boolean = true;
}
