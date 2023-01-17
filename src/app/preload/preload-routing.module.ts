import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { ContactcompComponent } from './contactcomp/contactcomp.component';
import { AccountheadModule } from './dashboardcomp/accounthead/accounthead.module';
import { CreditmanagerModule } from './dashboardcomp/creditmanager/creditmanager.module';
import { DashboardcompComponent } from './dashboardcomp/dashboardcomp.component';
import { OperationalexecutiveRoutingModule } from './dashboardcomp/operationalexecutive/operationalexecutive-routing.module';
import { OperationalexecutiveModule } from './dashboardcomp/operationalexecutive/operationalexecutive.module';
import { ApplyforloanComponent } from './dashboardcomp/relationalexecutive/applyforloan/applyforloan.component';
import { RelationalexecutiveModule } from './dashboardcomp/relationalexecutive/relationalexecutive.module';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { EmicalculatorcompComponent } from './emicalculatorcomp/emicalculatorcomp.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { LoginComponent } from './login/login.component';
import { RegistercompComponent } from './registercomp/registercomp.component';

const routes: Routes = [
  {path:"",component:DefaultcompComponent,
    children:[
               {path:"",component:HomecompComponent},  
               {path:"login",component:LoginComponent},
               {path:"register",component:RegistercompComponent},
               {path:"about",component:AboutcompComponent},
               {path:"emicalculate",component:EmicalculatorcompComponent},
               {path:"contact",component:ContactcompComponent},
              //  {path:"applyforloan",component:ApplyforloanComponent},
             ]
  },
  {path:"dashboard",component:DashboardcompComponent,
    children:[
            {path:"operationalexc",loadChildren:()=>OperationalexecutiveModule},
            {path:"relationalexe",loadChildren:()=>RelationalexecutiveModule},
            {path:"accounthead",loadChildren:()=>AccountheadModule},
            {path:"creditmanager",loadChildren:()=>CreditmanagerModule},
             ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadRoutingModule { }
