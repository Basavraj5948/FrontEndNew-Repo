import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { ViewapprovedsanctionletterComponent } from './viewapprovedsanctionletter/viewapprovedsanctionletter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoandisbursementcompComponent } from './loandisbursementcomp/loandisbursementcomp.component';


@NgModule({
  declarations: [
    ViewapprovedsanctionletterComponent,
    LoandisbursementcompComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule,ReactiveFormsModule
  ],
  exports:[
    ViewapprovedsanctionletterComponent,
    LoandisbursementcompComponent
  ]
})
export class AccountheadModule { }
