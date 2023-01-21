import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewapplicantform',
  templateUrl: './viewapplicantform.component.html',
  styleUrls: ['./viewapplicantform.component.scss']
})
export class ViewapplicantformComponent implements OnInit{
  // if we wan to get Data from Router URL we have to use ActivateRoute class having paramMap method which gives Data from URL---
 constructor( private activateRouter:ActivatedRoute,private cs:CommonserviceService,private fb:FormBuilder){

 }
 customerdetails:Customerdetails;
 ngOnInit(): void 
 {
  // paramMap method is used to get Data from URL----
  //  this.activateRouter.paramMap.subscribe(param=>   {
  //     // now Data will be came in String format we need to convert it into Object with help of JSON.parse method--
  //     this.customerdetails=JSON.parse(param.get('data'));   })
   this.activateRouter.queryParams.subscribe((params)=>{
    console.log(params)
    this.customerdetails=JSON.parse(params['data']);
   })
 }
 show() {
  /* Access image by id and change
  the display property to block*/
  document.getElementById('image')
          .style.display = "block";

  document.getElementById('btnID')
          .style.display = "none";
}
showIP() {
  /* Access image by id and change
  the display property to block*/
  document.getElementById('imageIP')
          .style.display = "block";

  document.getElementById('btnIDIP')
          .style.display = "none";
}
showP() {
  /* Access image by id and change
  the display property to block*/
  document.getElementById('imageP')
          .style.display = "block";

  document.getElementById('btnIDP')
          .style.display = "none";
}
showS() {
  /* Access image by id and change
  the display property to block*/
  document.getElementById('imageS')
          .style.display = "block";

  document.getElementById('btnIDS')
          .style.display = "none";
}
showPass() {
  /* Access image by id and change
  the display property to block*/
  document.getElementById('imagePass')
          .style.display = "block";

  document.getElementById('btnIDPass')
          .style.display = "none";
}

 docverified(customerId:number)
 {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Documents are Verified !!',
    showConfirmButton: false,
    timer: 2000
  })
       let loanstatus="documentverfied"
    this.cs.verifydetails(customerId,loanstatus).subscribe();
 }
 docrejected(customerId:number)
 {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Documents are Rejected !!',
    showConfirmButton: false,
    timer: 2000
  })
  let loanstatus="documentrejected"
 this.cs.verifydetails(customerId,loanstatus).subscribe();
 }
 

}
