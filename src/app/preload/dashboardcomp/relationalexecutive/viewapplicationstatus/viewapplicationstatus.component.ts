import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { Enquirymodel } from 'src/app/classes/enquirymodel';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewapplicationstatus',
  templateUrl: './viewapplicationstatus.component.html',
  styleUrls: ['./viewapplicationstatus.component.scss']
})
export class ViewapplicationstatusComponent {

  constructor(private cs:CommonserviceService,private router:Router){}
  
  customerDetails:Customerdetails;
 
  // showme:boolean=true;

  ngOnInit()
  {
    this.cs.getAllCustomer().subscribe((response:any)=>{
        console.log(response.responseData);
       this.customerDetails = response.responseData;
    })
    // if(this.response.responseData==='SanctionLetterGenerated')
    //  {
    //   this.showme=true;
    //  }
    //  else{
    //   this.showme=false;
    //  }
  }

  viewSanctionLetter(customer:Customerdetails)
  {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Please Wait !!!!!  we are Fetching Data ........',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigate(["/dashboard/relationalexe/viewsanctionletter/"],{queryParams:{data:JSON.stringify(customer)}});
  }

  sendsanletter(customer:Customerdetails)
  {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Please Wait !!!!! Mail Sending Started.....',
      showConfirmButton: false,
      timer: 2000
    })
    this.cs.sendsanletterMail(customer.customerId).subscribe((response:any)=>{
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
