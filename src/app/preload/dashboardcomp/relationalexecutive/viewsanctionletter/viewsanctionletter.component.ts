import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewsanctionletter',
  templateUrl: './viewsanctionletter.component.html',
  styleUrls: ['./viewsanctionletter.component.scss']
})
export class ViewsanctionletterComponent {
 constructor(public activateroute:ActivatedRoute,public cs:CommonserviceService){}

 customerdetails:Customerdetails;

 ngOnInit()
 {
  this.activateroute.queryParams.subscribe((params)=>{
      this.customerdetails=JSON.parse(params['data']);
  })
 }

 approveSanctionLetter()
 {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Sanction Letter Approved !!!',
    showConfirmButton: false,
    timer: 2000
  })
  this.cs.sanctionStatus('Accepted',this.customerdetails.customerId).subscribe((response:any)=>{
      console.log(response);
  });
  
 }

 rejectSanctionLetter()
 {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Sanction Letter Rejected !!!',
    showConfirmButton: false,
    timer: 2000
  })
  this.cs.sanctionStatus('Rejected',this.customerdetails.customerId).subscribe((response:any)=>{
    console.log(response);
});
 }
}
