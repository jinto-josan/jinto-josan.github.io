import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getKeys(obj:any){
    return Object.keys(obj);
  }
}
