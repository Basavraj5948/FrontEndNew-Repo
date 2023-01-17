import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquirymodel } from 'src/app/classes/enquirymodel';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cibilapproved',
  templateUrl: './cibilapproved.component.html',
  styleUrls: ['./cibilapproved.component.scss']
})
export class CibilapprovedComponent {

  constructor(private cs:CommonserviceService,private router:Router){}
  
  enquiries:Enquirymodel[];

  ngOnInit()
  {
    this.cs.GetEnquiryData('approved').subscribe((response:any)=>{
      console.log(response);
       this.enquiries=response.responseData;
    });
  
  }

  sendMail(enquiry:Enquirymodel)
  {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Email send !! wait for Backend Response',
      showConfirmButton: false,
      timer: 2000
    })
    this.cs.sendMail(enquiry).subscribe((response:any)=>{
      
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: response.message,
        showConfirmButton: false,
        timer: 2000
      })
    });
    
  }
  fillform(enquiry:Enquirymodel)
  {
   alert("method get called");
   this.router.navigate(["dashboard/relationalexe/applyforloan"]);

    
  }

}
