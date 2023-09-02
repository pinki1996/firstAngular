import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  @Input()
  employees:Employee[] =  [];

  @Output()
  info = new EventEmitter();

  func(emp:Employee){
      this.info.emit(emp)
  }
}
