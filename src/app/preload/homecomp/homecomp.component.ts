import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.scss']
})
export class HomecompComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "unicorn",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/app/src/assets/onlinelogomaker-011723-1836-8932.svg")
    );
  }
}
