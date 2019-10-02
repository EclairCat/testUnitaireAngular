import { Injectable } from '@angular/core';
import { link } from 'fs';

@Injectable({
    providedIn: 'root'
})
export class caculService {

    constructor() {}
    max:number;

    res = "";
    countNumber(i:number,c:number) {
        this.max = i + c ;
        console.log("hola");    
        for(i; i < this.max; i++){
          console.log(i);
        }
        return i;
    }


    Replace(ligne:string,carac:string, replace:string)
    {
        for(var i=0; i < ligne.length; i++)
        {
            if(ligne.charAt(i)==carac)
            {
                this.res += replace;
            }
            else{
                this.res += ligne.charAt(i);
            }
        }
        return this.res;
    }
}
 