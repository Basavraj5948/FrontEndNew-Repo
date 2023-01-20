import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { ViewverifiedapplicationsComponent } from './viewverifiedapplications/viewverifiedapplications.component';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
  ViewverifiedapplicationsComponent,
  GeneratesanctionletterComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,ReactiveFormsModule,MatButtonModule
  ],
  exports:[
    ViewverifiedapplicationsComponent,
    GeneratesanctionletterComponent
  ]
})
export class CreditmanagerModule { }
