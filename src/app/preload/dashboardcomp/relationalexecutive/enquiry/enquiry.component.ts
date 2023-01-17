import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import{Enquirymodel} from 'src/app/classes/enquirymodel'
import { flush } from '@angular/core/testing';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {

  constructor(private cs:CommonserviceService){}
  
  enquiries:Enquirymodel[];

  ngOnInit()
  {
    this.cs.GetEnquiryData('pending').subscribe((response:any)=>{
      console.log(response);
       this.enquiries=response.responseData;
    });
  
  }
  disabled:boolean=true;
  enq:Enquirymodel;

  dt = new Date(); // used for delay
  checkCIBIL(enquiry:Enquirymodel)
  {

    // for delaying the response to show alert ----
    this.dt.setSeconds(this.dt.getSeconds() + 15);
    delay(this.dt);
    this.cs.getCIBILScore(enquiry).subscribe((response:any)=>{
      this.enq=response.responseData;
    });
      
    window.location.reload();
    
  }
  
}
