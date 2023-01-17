import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsendtooeComponent } from './notificationsendtooe/notificationsendtooe.component';
import { TransfertoahComponent } from './transfertoah/transfertoah.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';

const routes: Routes = [
  {path:"verifydetails",component:VerifydetailsComponent},
  {path:"notificationsend",component:NotificationsendtooeComponent},
  {path:"transfertoAH",component:TransfertoahComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
