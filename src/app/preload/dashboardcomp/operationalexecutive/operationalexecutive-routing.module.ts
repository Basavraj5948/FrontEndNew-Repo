import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilevarificationComponent } from './filevarification/filevarification.component';
import { ViewapplicantformComponent } from './viewapplicantform/viewapplicantform.component';


const routes: Routes = [
  {path:"filevarification",component:FilevarificationComponent},
  {path:"viewapplicantform",component:ViewapplicantformComponent},
  // now if we want to take Data from router URL we need to mention one more routing which also has Data--- 
  {path:"viewapplicantform/:data",component:ViewapplicantformComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
