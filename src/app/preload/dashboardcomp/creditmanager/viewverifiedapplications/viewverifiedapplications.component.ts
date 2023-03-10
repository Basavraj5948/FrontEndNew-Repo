import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Please Wait !!!!!!!',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigate(["./dashboard/creditmanager/generatesanctionletter/"],
        {queryParams:{data:JSON.stringify(verifiedcustomerdetails)}});
  }


}
