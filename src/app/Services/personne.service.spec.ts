import { TestBed } from '@angular/core/testing';
import { PersonneService } from './personne.service';
import { Personne } from '../Classes/personne';
import { HttpClientTestingModule, 
        HttpTestingController } from '@angular/common/http/testing';

describe('PersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  describe('CreatePersonne', ()=>{
    let serviceP : PersonneService;
    let httpC : HttpTestingController;
    let p : Personne;

    beforeEach(()=>{
      TestBed.configureTestingModule({
        providers: [PersonneService],
        imports : [HttpClientTestingModule]
      });

      httpC = TestBed.get(HttpTestingController);
      serviceP = TestBed.get(PersonneService);
      p = new Personne();
      console.log("Creation du service Personne")
    })

    

    it("should create a Personne with the good params", () =>{
      const p = serviceP.createPersonne("lebro", "bob", 10, 200);
      expect(p).toBeTruthy();
      expect(p.nom).toBe("lebro");
      expect(p.prenom).toBe("bob");
      expect(p.age).toBe(10);
      expect(p.taille).toBe(200);
    })

    it("Api Work", ()=>{
      serviceP.getPersonne().subscribe(data => {
        this.p = data;
        expect(this.p).toBeTruthy();
        expect(this.p.nom).toBe("yolo");
        expect(this.p.prenom).toBe("toto");
        expect(this.p.age).toBe(25);
        expect(this.p.taille).toBe(100);  
      });      
    })


  })


});
