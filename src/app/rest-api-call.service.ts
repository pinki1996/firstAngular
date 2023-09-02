import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class RestApiCallService {

  constructor(private httpVar:HttpClient) { }


 

  invokeGetAllEmployeeAPI():Observable<any>{
      var restUrl = "http://localhost:5000/read/data";
      return this.httpVar.get(restUrl)
  }

  invokePostAllEmployeeAPI(newEmp:Employee):Observable<any>{
    var restUrl = "http://localhost:5000/create/data";
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':'*/*'
      })
    };
    return this.httpVar.post(restUrl, newEmp, httpOptions)

}

}
