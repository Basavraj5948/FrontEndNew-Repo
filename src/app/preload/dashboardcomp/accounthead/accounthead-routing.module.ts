import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoandisbursementcompComponent } from './loandisbursementcomp/loandisbursementcomp.component';
import { ViewapprovedsanctionletterComponent } from './viewapprovedsanctionletter/viewapprovedsanctionletter.component';


const routes: Routes = [
  {path:"viewapprovedsanctionletters",component:ViewapprovedsanctionletterComponent},
  {path:"loandisbursementcomp",component:LoandisbursementcompComponent},
  {path:"loandisbursementcomp/:data",component:LoandisbursementcompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountheadRoutingModule { }
