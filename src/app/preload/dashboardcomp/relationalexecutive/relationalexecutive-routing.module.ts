import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { CibilapprovedComponent } from './cibilapproved/cibilapproved.component';
import { CibilrejectedComponent } from './cibilrejected/cibilrejected.component';


import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterenquiryComponent } from './registerenquiry/registerenquiry.component';
import { ViewapplicationstatusComponent } from './viewapplicationstatus/viewapplicationstatus.component';
import { ViewsanctionletterComponent } from './viewsanctionletter/viewsanctionletter.component';

const routes: Routes = [
  {path:"enquiry",component:EnquiryComponent},
  {path:"registerenquiry",component:RegisterenquiryComponent},
  {path:"cibilapproved",component:CibilapprovedComponent},
  {path:"cibilrejected",component:CibilrejectedComponent},
  {path:"applyforloan",component:ApplyforloanComponent},
  {path:"viewappstatus",component:ViewapplicationstatusComponent},
  {path:"viewsanctionletter",component:ViewsanctionletterComponent},
  {path:"viewsanctionletter/:data",component:ViewsanctionletterComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationalexecutiveRoutingModule { }
