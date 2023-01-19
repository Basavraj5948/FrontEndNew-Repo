import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { ViewverifiedapplicationsComponent } from './viewverifiedapplications/viewverifiedapplications.component';


const routes: Routes = [
  {path:"viewverifiedalpplications",component:ViewverifiedapplicationsComponent},
  {path:"generatesanctionletter",component:GeneratesanctionletterComponent},
  {path:"generatesanctionletter/:data",component:GeneratesanctionletterComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
