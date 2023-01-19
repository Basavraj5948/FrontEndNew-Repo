import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-viewverifiedapplications',
  templateUrl: './viewverifiedapplications.component.html',
  styleUrls: ['./viewverifiedapplications.component.scss']
})
export class ViewverifiedapplicationsComponent {
  constructor(private cs:CommonserviceService,private router:Router){}

   verifiedapplications:Customerdetails[];
    ngOnInit(): void {
    
     this.cs.getDocVerifiedApp('DocumentVerified').subscribe((response:any)=>{
      this.verifiedapplications=response.responseData;
    });
  }
  
  createsanctionletter(verifiedcustomerdetails:Customerdetails)
  {
   
    this.router.navigate(["./dashboard/creditmanager/generatesanctionletter/"],
        {queryParams:{data:JSON.stringify(verifiedcustomerdetails)}});
  }


}
