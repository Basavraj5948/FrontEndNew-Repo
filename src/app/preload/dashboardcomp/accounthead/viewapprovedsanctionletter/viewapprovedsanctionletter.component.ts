import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-viewapprovedsanctionletter',
  templateUrl: './viewapprovedsanctionletter.component.html',
  styleUrls: ['./viewapprovedsanctionletter.component.scss']
})
export class ViewapprovedsanctionletterComponent {
  constructor(private cs:CommonserviceService,private router:Router){}

  sanctionedapprovedcustomers:Customerdetails;
  
    ngOnInit(): void {
      this.cs.getDocVerifiedApp('SanctionLetterApproved').subscribe((response:any)=>{
        this.sanctionedapprovedcustomers=response.responseData;
      });
    }
    
    disburseloan(loandisbursecustomer:Customerdetails)
    {
     
      this.router.navigate(["./dashboard/accounthead/loandisbursementcomp/"],
          {queryParams:{data:JSON.stringify(loandisbursecustomer)}});
    }
}
