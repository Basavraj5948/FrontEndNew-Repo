import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filevarification',
  templateUrl: './filevarification.component.html',
  styleUrls: ['./filevarification.component.scss']
})
export class FilevarificationComponent {
  constructor(private cs:CommonserviceService,private router:Router){}

customerapplications:Customerdetails[]
  ngOnInit(): void {
    
    this.cs.getCustomer("pending").subscribe((response:any)=>{
      console.log(response);
       this.customerapplications=response.responseData;
    });
  }
  //  singlecustomer:any;
   viewDetails(customerdetails:Customerdetails)
   {
    // now customerdetails object we need to convert into String with help of Stringify method--
      // let routeCoustome = JSON.stringify(customerdetails); method 1
      //  localStorage.setItem("customerdetails",);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title:"Please Wait !!",
        showConfirmButton: false,
        timer: 2000
      })

      // now we are going to forword then object Data in the form of String Data with router URL----
        this.router.navigate(["./dashboard/operationalexc/viewapplicantform/"],
        {queryParams:{data:JSON.stringify(customerdetails)}});
  //   this.cs.getSingleCustomer(id).subscribe((response)=>{
  //   this.singlecustomer=response;
  //   console.log(this.singlecustomer);
  // })
  }

}
