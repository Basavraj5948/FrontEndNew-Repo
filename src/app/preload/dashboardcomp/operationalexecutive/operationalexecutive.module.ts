import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';

import { FilevarificationComponent } from './filevarification/filevarification.component';
import { ViewapplicantformComponent } from './viewapplicantform/viewapplicantform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    FilevarificationComponent,
       ViewapplicantformComponent,
    
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule,ReactiveFormsModule
  ],
  exports:[
   
    FilevarificationComponent,
    ViewapplicantformComponent,
  
  ]
})
export class OperationalexecutiveModule { }
