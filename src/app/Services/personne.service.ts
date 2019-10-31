import { Injectable } from '@angular/core';
import { Personne } from '../Classes/personne';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }
  p: Personne;


  createPersonne(nom: string, prenom: string, age:number, taille:number)
  {
    this.p = new Personne();
    this.p.nom = nom;
    this.p.prenom = prenom;
    this.p.age = age;
    this.p.taille = taille;

    return this.p;
  }

  getPersonne(){
    return this.http.get("http://localhost:8080");
  }

  
}
