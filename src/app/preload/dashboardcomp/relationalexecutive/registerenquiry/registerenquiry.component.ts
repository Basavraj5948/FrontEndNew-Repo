import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerenquiry',
  templateUrl: './registerenquiry.component.html',
  styleUrls: ['./registerenquiry.component.scss']
})
export class RegisterenquiryComponent {
  constructor(private fb:FormBuilder,private cs:CommonserviceService){}

  enquiry:FormGroup;

  ngOnInit()
  {
    this.enquiry=this.fb.group({
      customerFirstName:[this.cs.enquirymodel.customerFirstName,[Validators.required]],
      customerLastName:[this.cs.enquirymodel.customerLastName,[Validators.required]],
      panCard:[this.cs.enquirymodel.panCard,[Validators.required]],
      aadharNumber:[this.cs.enquirymodel.aadharNumber,[Validators.required]],
      emailId:[this.cs.enquirymodel.emailId,[Validators.required,Validators.email]],
      mobileNumber:[this.cs.enquirymodel.mobileNumber,[Validators.required,Validators.minLength(10)]],
    });
  }
  //for validations----
  get customerFirstName()
  {
    return this.enquiry.get('customerFirstName');
  }
  get customerLastName()
  {
    return this.enquiry.get('customerLastName');
  }
  get panCard()
  {
    return this.enquiry.get('panCard');
  }
  get aadharNumber()
  {
    return this.enquiry.get('aadharNumber');
  }
  get emailId()
  {
    return this.enquiry.get('emailId');
  }
  get mobileNumber()
  {
    return this.enquiry.get('mobileNumber');
  }

  RaiseEnquiry()
  {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Register it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registered!',
          'Success !! Please Refresh Page to Raise New Enquiry',
          
        )
      }
    })
    
    this.cs.enquirymodel.customerFirstName=this.enquiry.get('customerFirstName').value;
    this.cs.enquirymodel.customerLastName=this.enquiry.get('customerLastName').value;
    this.cs.enquirymodel.panCard=this.enquiry.get('panCard').value;
    this.cs.enquirymodel.aadharNumber=this.enquiry.get('aadharNumber').value;
    this.cs.enquirymodel.emailId=this.enquiry.get('emailId').value;
    this.cs.enquirymodel.mobileNumber=this.enquiry.get('mobileNumber').value;

    this.cs.PostEnquiry().subscribe();

    // window.location.reload();

    
  }



}
