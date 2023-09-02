import { Component, OnInit } from '@angular/core';
import { RestApiCallService } from '../rest-api-call.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-http-integration',
  templateUrl: './http-integration.component.html',
  styleUrls: ['./http-integration.component.css']
})
export class HttpIntegrationComponent implements OnInit{

  constructor(private restSrv:RestApiCallService){

  }


  ngOnInit(): void {
    var content = localStorage.getItem("empInfo")
    content  = (content != null ? content : '')
    this.allEmployess = JSON.parse(content)  
  }

  allEmployess:Employee[] = [];

  getEmployees(){
      this.restSrv.invokeGetAllEmployeeAPI()
          .subscribe(resp =>{             
              this.allEmployess = resp.data;
              localStorage.setItem("empInfo", JSON.stringify(this.allEmployess))
          });
  }

}
