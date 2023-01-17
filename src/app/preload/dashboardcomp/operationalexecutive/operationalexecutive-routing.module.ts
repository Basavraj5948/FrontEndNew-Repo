import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { FilevarificationComponent } from './filevarification/filevarification.component';
import { FormfillupComponent } from './formfillup/formfillup.component';
import { SanctionletterComponent } from './sanctionletter/sanctionletter.component';

const routes: Routes = [
  {path:"cibilscore",component:CibilscoreComponent},
  {path:"fromfillup",component:FormfillupComponent},
  {path:"filevarification",component:FilevarificationComponent},
  {path:"sanctionletter",component:SanctionletterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
