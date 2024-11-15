import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getKeys(obj:any){
    return Object.keys(obj);
  }
  getEnumName(enumObject: any, value: number | string): string | undefined {
    return enumObject[value];
  }
}
