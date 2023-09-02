import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

test1:Employee= new Employee(201,"Prem", 90000,5000)
test2:Employee= new Employee(202,"Krishna", 90000,5000)
test3:Employee= new Employee(203,"Ram", 90000,5000)
test4:Employee= new Employee(204,"Pankaj", 90000,5000)


testers:Employee[] = [this.test1, this.test2, this.test3, this.test4];

selectedEmployee:Employee = new Employee();
  
receivedData(emp:Employee){
    this.selectedEmployee = emp;
}

}
