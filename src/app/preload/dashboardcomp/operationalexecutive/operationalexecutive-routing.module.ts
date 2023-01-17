import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilevarificationComponent } from './filevarification/filevarification.component';


const routes: Routes = [
  {path:"filevarification",component:FilevarificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
