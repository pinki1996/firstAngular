import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCarrierService {

  constructor() { }

  courseSrv:string = "";

  getCourse():string{
    return this.courseSrv;
  }

  setCourse(course:string){
    this.courseSrv = course;
  }
}
