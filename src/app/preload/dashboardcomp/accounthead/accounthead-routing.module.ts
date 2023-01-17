import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursmentcompComponent } from './disbursmentcomp/disbursmentcomp.component';
import { LedgerprocesscompComponent } from './ledgerprocesscomp/ledgerprocesscomp.component';

const routes: Routes = [
  {path:"disbursment",component:DisbursmentcompComponent},
  {path:"ledgerprocess",component:LedgerprocesscompComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountheadRoutingModule { }
