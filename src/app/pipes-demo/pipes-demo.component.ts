import { Component } from '@angular/core';
import { DataCarrierService } from '../data-carrier.service';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  constructor(private srv:DataCarrierService){}

  ngOnInit():void{
    this.courseReceived = this.srv.getCourse();
    
  }
   courseReceived:string = "";

  bill:number=9890;

  estDate:Date= new Date();

  amount:number=89457812;

  courses:string[]=["html", "css", "js", "ts"];

  selectectedIndex:number = 0;

  fname:string="";

  enteredNumber:number = 0;

}
