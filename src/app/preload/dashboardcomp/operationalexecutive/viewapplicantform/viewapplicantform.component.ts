import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-viewapplicantform',
  templateUrl: './viewapplicantform.component.html',
  styleUrls: ['./viewapplicantform.component.scss']
})
export class ViewapplicantformComponent implements OnInit{
  // if we wan to get Data from Router URL we have to use ActivateRoute class having paramMap method which gives Data from URL---
 constructor( private activateRouter:ActivatedRoute,private cs:CommonserviceService,private fb:FormBuilder){

 }

//  viewdetails:FormGroup; 
 customerdetails:Customerdetails;
 ngOnInit(): void 
 {
  // paramMap method is used to get Data from URL----
   this.activateRouter.paramMap.subscribe(param=>
    {
      // now Data will be came in String format we need to convert it into Object with help of JSON.parse method--
      this.customerdetails=JSON.parse(param.get('data'));
    })

 }

}
