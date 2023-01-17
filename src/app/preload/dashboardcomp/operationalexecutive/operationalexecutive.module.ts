import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { FormfillupComponent } from './formfillup/formfillup.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { FilevarificationComponent } from './filevarification/filevarification.component';
import { SanctionletterComponent } from './sanctionletter/sanctionletter.component';


@NgModule({
  declarations: [
    FormfillupComponent,
    CibilscoreComponent,
    FilevarificationComponent,
    SanctionletterComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule
  ],
  exports:[
    FormfillupComponent,
    CibilscoreComponent,
    FilevarificationComponent,
    SanctionletterComponent
  ]
})
export class OperationalexecutiveModule { }
