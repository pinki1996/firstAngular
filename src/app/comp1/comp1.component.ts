import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  dev1:Employee =  new Employee(10, 'Anu', 90000, 5000)
  dev2:Employee =  new Employee(11, 'Ishan', 90000, 5000)
  dev3:Employee =  new Employee(12, 'Pinki', 90000, 5000)
  dev4:Employee =  new Employee(13, 'Rinki', 90000, 5000)
  dev5:Employee =  new Employee(15, 'Prashant', 90000, 5000)

  developers:Employee [] = [this.dev1, this.dev2, this.dev3, this.dev4, this.dev5];

  selectedEmployee:Employee = new Employee();
  
  receivedData(emp:Employee){
      this.selectedEmployee = emp;
  }
}
