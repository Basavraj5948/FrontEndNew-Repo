import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';
import { NotificationsendtooeComponent } from './notificationsendtooe/notificationsendtooe.component';
import { TransfertoahComponent } from './transfertoah/transfertoah.component';


@NgModule({
  declarations: [
    VerifydetailsComponent,
    NotificationsendtooeComponent,
    TransfertoahComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
