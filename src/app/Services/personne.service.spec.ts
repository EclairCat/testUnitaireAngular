import { TestBed } from '@angular/core/testing';
import { PersonneService } from './personne.service';
import { Personne } from '../Classes/personne';
 
describe('PersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneService = TestBed.get(PersonneService);
    expect(service).toBeTruthy();
  });

  describe('CreatePersonne', ()=>{
    let serviceP : PersonneService;

    beforeEach(()=>{
      serviceP = new PersonneService();
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



  })


});
