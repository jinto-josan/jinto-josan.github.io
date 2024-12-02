import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  icons:{[key:string]:string}={
    github:`social-icons/github.svg`,
    linkedin:`social-icons/linkedin.svg`,
    microsoft_ass_cert:`certificate-icons/microsoft-certified-associate-badge.svg`,
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }
  getKeys(obj:any){
    return Object.keys(obj);
  }
  getEnumName(enumObject: any, value: number | string): string | undefined {
    return enumObject[value];
  }

  registerIcons(){    
    Object.keys(this.icons).forEach(icon=>{
      this.iconRegistry.addSvgIcon(icon, 
        this.sanitizer.bypassSecurityTrustResourceUrl(this.icons[icon]));
    })   

  }
}
