import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { Enquirymodel } from 'src/app/classes/enquirymodel';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-viewapplicationstatus',
  templateUrl: './viewapplicationstatus.component.html',
  styleUrls: ['./viewapplicationstatus.component.scss']
})
export class ViewapplicationstatusComponent {

  constructor(private cs:CommonserviceService,private router:Router){}
  
  customerDetails:Customerdetails;

  ngOnInit()
  {
    this.cs.getAllCustomer().subscribe((response:any)=>{
        console.log(response.responseData);
       this.customerDetails = response.responseData;
    })
  
  }
}
