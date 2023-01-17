import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';

import { FilevarificationComponent } from './filevarification/filevarification.component';



@NgModule({
  declarations: [
  
    FilevarificationComponent,
    
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule
  ],
  exports:[
   
    FilevarificationComponent,
  
  ]
})
export class OperationalexecutiveModule { }
