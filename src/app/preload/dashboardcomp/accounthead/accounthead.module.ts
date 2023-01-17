import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { DisbursmentcompComponent } from './disbursmentcomp/disbursmentcomp.component';
import { LedgerprocesscompComponent } from './ledgerprocesscomp/ledgerprocesscomp.component';


@NgModule({
  declarations: [
    DisbursmentcompComponent,
    LedgerprocesscompComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule
  ],
  exports:[
    DisbursmentcompComponent,
    LedgerprocesscompComponent
  ]
})
export class AccountheadModule { }
