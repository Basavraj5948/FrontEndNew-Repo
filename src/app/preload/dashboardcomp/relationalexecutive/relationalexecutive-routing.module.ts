import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { CibilapprovedComponent } from './cibilapproved/cibilapproved.component';
import { CibilrejectedComponent } from './cibilrejected/cibilrejected.component';


import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterenquiryComponent } from './registerenquiry/registerenquiry.component';

const routes: Routes = [
  {path:"enquiry",component:EnquiryComponent},
  {path:"registerenquiry",component:RegisterenquiryComponent},
  {path:"cibilapproved",component:CibilapprovedComponent},
  {path:"cibilrejected",component:CibilrejectedComponent},
  {path:"applyforloan",component:ApplyforloanComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationalexecutiveRoutingModule { }
