import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationalexecutiveRoutingModule } from './relationalexecutive-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterenquiryComponent } from './registerenquiry/registerenquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CibilapprovedComponent } from './cibilapproved/cibilapproved.component';
import { CibilrejectedComponent } from './cibilrejected/cibilrejected.component';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import {MatStepperModule} from '@angular/material/stepper'
import {MatListModule} from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    EnquiryComponent,
    RegisterenquiryComponent,
    CibilapprovedComponent,
    CibilrejectedComponent,
    ApplyforloanComponent
  ],
  imports: [
    CommonModule,
    RelationalexecutiveRoutingModule,ReactiveFormsModule,
    MatButtonModule,MatStepperModule,MatListModule,MatInputModule,
    MatIconModule,MatRadioModule
  ],
  exports:[
    EnquiryComponent,
    RegisterenquiryComponent,
    CibilapprovedComponent,
    CibilrejectedComponent,
    ApplyforloanComponent
  ]
})
export class RelationalexecutiveModule { }
