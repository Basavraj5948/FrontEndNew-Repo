import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-filevarification',
  templateUrl: './filevarification.component.html',
  styleUrls: ['./filevarification.component.scss']
})
export class FilevarificationComponent {
  constructor(private cs:CommonserviceService,private router:Router){}

customerapplications:Customerdetails[]
  ngOnInit(): void {
    
    this.cs.getCustomer().subscribe((response:any)=>{
      console.log(response);
       this.customerapplications=response.responseData;
    });
    
    // this.customerapplications.forEach(cst => {
                   
    //   console.log(cst)
    //  });
  }
   singlecustomer:any;
   viewDetails(customerdetails:Customerdetails)
   {
    // now customerdetails object we need to convert into String with help of Stringify method--
      let routeCoustome = JSON.stringify(customerdetails);
      //  localStorage.setItem("customerdetails",);
      // now we are going to forword then object Data in the form of String Data with router URL----
        this.router.navigate(["dashboard/operationalexc/viewapplicantform/"+routeCoustome])
  //   this.cs.getSingleCustomer(id).subscribe((response)=>{
  //   this.singlecustomer=response;
  //   console.log(this.singlecustomer);
  // })
  }

}
