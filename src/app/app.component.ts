import { Component } from '@angular/core';
import { caculService } from './calcul.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private calculService: caculService) {}

  title = 'testUnitaire';
  res = 0;
  
  countNumber(){
    this.res = this.calculService.countNumber(4,5);  
  }


}
