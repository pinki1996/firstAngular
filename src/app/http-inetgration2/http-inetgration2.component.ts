import { Component } from '@angular/core';
import { Employee } from '../employee';
import { RestApiCallService } from '../rest-api-call.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-http-inetgration2',
  templateUrl: './http-inetgration2.component.html',
  styleUrls: ['./http-inetgration2.component.css']
})
export class HttpInetgration2Component {

  constructor(private restSrv:RestApiCallService){

  }

  newEmp:Employee = new Employee()

  resMsg:string= "";

  PostnewEmp(){
      this.restSrv.invokePostAllEmployeeAPI(this.newEmp)
      .subscribe(info=>{
            this.resMsg = info.data;
            this.newEmp = new Employee();
      })
  }
}
