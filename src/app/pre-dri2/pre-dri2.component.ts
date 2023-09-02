import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-dri2',
  templateUrl: './pre-dri2.component.html',
  styleUrls: ['./pre-dri2.component.css']
})
export class PreDri2Component {

  players:string[] = ["","sachin", "kohli", "dhoni", "yuvraj"];

  selectedPlayer:string=""

  cssCarrier:string="";

  applyCss(){
    switch(this.selectedPlayer){
      case 'sachin':
        this.cssCarrier = "cls1";
      break;
      case 'kohli':
        this.cssCarrier = "cls2";
      break;
      case 'dhoni':
        this.cssCarrier = "cls3";
      break;
      case 'yuvraj':
        this.cssCarrier = "cls4";
      break;
    }
  }

}
