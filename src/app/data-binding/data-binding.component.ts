import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { DataCarrierService } from '../data-carrier.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  constructor(private routerVar:Router, private srv:DataCarrierService){}

 
  course:string = "angular";

  func(){
    this.srv.setCourse(this.course);
    this.routerVar.navigate(['/pipe'])
  }

}
