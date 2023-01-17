import { Component } from '@angular/core';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-filevarification',
  templateUrl: './filevarification.component.html',
  styleUrls: ['./filevarification.component.scss']
})
export class FilevarificationComponent {
  constructor(private cs:CommonserviceService){}

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
  onclicksinglecustomer(id:any){
        
    this.cs.getSingleCustomer(id).subscribe((response)=>{
    this.singlecustomer=response;
    console.log(this.singlecustomer);
  })
  }

}
