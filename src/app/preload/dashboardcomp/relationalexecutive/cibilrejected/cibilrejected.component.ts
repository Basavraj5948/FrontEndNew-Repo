import { Component } from '@angular/core';
import { Enquirymodel } from 'src/app/classes/enquirymodel';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cibilrejected',
  templateUrl: './cibilrejected.component.html',
  styleUrls: ['./cibilrejected.component.scss']
})
export class CibilrejectedComponent {

  constructor(private cs:CommonserviceService){}
  
  enquiries:Enquirymodel[];

  ngOnInit()
  {
    this.cs.GetEnquiryData('rejected').subscribe((response:any)=>{
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

}
