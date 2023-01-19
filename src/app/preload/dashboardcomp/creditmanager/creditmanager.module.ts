import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { ViewverifiedapplicationsComponent } from './viewverifiedapplications/viewverifiedapplications.component';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ViewverifiedapplicationsComponent,
  GeneratesanctionletterComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,ReactiveFormsModule
  ],
  exports:[
    ViewverifiedapplicationsComponent,
    GeneratesanctionletterComponent
  ]
})
export class CreditmanagerModule { }
