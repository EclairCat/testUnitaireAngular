import { Component } from '@angular/core';
import { caculService } from './Services/calcul.service';
import { PersonneService} from './Services/personne.service';
import { Personne } from './Classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private calculService: caculService, private pService: PersonneService) {}

  title = 'testUnitaire';
  res = 0;
  resligne ="";
  p = new Personne();
  
  countN(){
    this.res = this.calculService.countNumber(4,5);
    console.log("test");
  }

  replace(){
    this.resligne = this.calculService.Replace("je teste cette ligne", "e", "o");
  }

  create(){
    this.p = this.pService.createPersonne("bob","lenon",24,170);
  }

}

