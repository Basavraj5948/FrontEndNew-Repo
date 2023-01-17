import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadRoutingModule } from './preload-routing.module';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { LoginComponent } from './login/login.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { DashboardcompComponent } from './dashboardcomp/dashboardcomp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OperationalexecutiveModule } from './dashboardcomp/operationalexecutive/operationalexecutive.module';
import { OperationalexecutiveRoutingModule } from './dashboardcomp/operationalexecutive/operationalexecutive-routing.module';
import { RelationalexecutiveModule } from './dashboardcomp/relationalexecutive/relationalexecutive.module';
import { RelationalexecutiveRoutingModule } from './dashboardcomp/relationalexecutive/relationalexecutive-routing.module';
import { HomecompComponent } from './homecomp/homecomp.component';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { AccountheadModule } from './dashboardcomp/accounthead/accounthead.module';
import { AccountheadRoutingModule } from './dashboardcomp/accounthead/accounthead-routing.module';
import { CreditmanagerModule } from './dashboardcomp/creditmanager/creditmanager.module';
import { CreditmanagerRoutingModule } from './dashboardcomp/creditmanager/creditmanager-routing.module';
import { FootercompComponent } from './footercomp/footercomp.component';
import { EmicalculatorcompComponent } from './emicalculatorcomp/emicalculatorcomp.component';
import { ContactcompComponent } from './contactcomp/contactcomp.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    DefaultcompComponent,
    LoginComponent,
    RegistercompComponent,
    DashboardcompComponent,
    HomecompComponent,
    AboutcompComponent,
    FootercompComponent,
    EmicalculatorcompComponent,
    ContactcompComponent,
   
  ],
  imports: [
    CommonModule,
    PreloadRoutingModule,ReactiveFormsModule,
    OperationalexecutiveModule,OperationalexecutiveRoutingModule,
    RelationalexecutiveModule,RelationalexecutiveRoutingModule,
    AccountheadModule,AccountheadRoutingModule,
    CreditmanagerModule,CreditmanagerRoutingModule,
    MatButtonModule,MatIconModule
  ],
  exports:[
    DefaultcompComponent,
    LoginComponent,
    RegistercompComponent,
    DashboardcompComponent,
    HomecompComponent,
    AboutcompComponent,
    FootercompComponent,
    EmicalculatorcompComponent,
    ContactcompComponent,
  ]
})
export class PreloadModule { }
