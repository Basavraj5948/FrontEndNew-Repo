import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-generatesanctionletter',
  templateUrl: './generatesanctionletter.component.html',
  styleUrls: ['./generatesanctionletter.component.scss']
})
export class GeneratesanctionletterComponent implements OnInit {

  constructor(public activateroute:ActivatedRoute,private fb:FormBuilder,private cs:CommonserviceService){}

  customerdetails:Customerdetails;
  sanctionletterform:FormGroup;
  emiForm: FormGroup;

  top: number;
  monthlyInterestRatio: number;
  bottom: number;
  sp: number;
  full: number;

  emi: number;
  interestt: number;
  total: number;


  ngOnInit(): void {
    // this.activateroute.paramMap.subscribe(param=>
    //   {
    //     this.customerdetails=JSON.parse(param.get('data'));
    //     console.log(this.customerdetails);
    //   })
    this.activateroute.queryParams.subscribe((params)=>{
      console.log(params)
      this.customerdetails=JSON.parse(params['data']);
     })
     this.emiForm = this.fb.group({
      principal: [''],
      interest: [''],
      tenure: ['']
    })
       
    this.sanctionletterform = this.fb.group({
      sanctionId:[0],
      sanctionDate: [''],
      applicantName: [''],
      contactDetails: [''],
      loanAmountSanctioned: [0],
      rateOfInterest: [0],
      loanTenure: [0],
      monthlyEmiAmount: [0],
      termsAndCondition: [''],
      sanctionStatus: [],
      sanctionletter:[],
    })
  }
  update() {
    this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure);
    this.bottom = this.top - 1;
    this.sp = this.top / this.bottom;
    this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    this.full = this.emiForm.value.tenure * this.emi;
    this.interestt = this.full - this.emiForm.value.principal;
  }





  generateSanction(sanctionedcustomerdetails:Customerdetails)
  {
    sanctionedcustomerdetails.customerSanctionLetter.sanctionId=this.sanctionletterform.get('sanctionId').value;
    sanctionedcustomerdetails.customerSanctionLetter.sanctionDate=this.sanctionletterform.get('sanctionDate').value;
    sanctionedcustomerdetails.customerSanctionLetter.applicantName=this.sanctionletterform.get('applicantName').value;
    sanctionedcustomerdetails.customerSanctionLetter.contactDetails=this.sanctionletterform.get('contactDetails').value;
    sanctionedcustomerdetails.customerSanctionLetter.loanAmountSanctioned=this.sanctionletterform.get('loanAmountSanctioned').value;
    sanctionedcustomerdetails.customerSanctionLetter.rateOfInterest=this.sanctionletterform.get('rateOfInterest').value;
    sanctionedcustomerdetails.customerSanctionLetter.loanTenure=this.sanctionletterform.get('loanTenure').value;
    sanctionedcustomerdetails.customerSanctionLetter.monthlyEmiAmount=this.sanctionletterform.get('monthlyEmiAmount').value;
    sanctionedcustomerdetails.customerSanctionLetter.termsAndCondition=this.sanctionletterform.get('termsAndCondition').value;
    sanctionedcustomerdetails.customerSanctionLetter.sanctionStatus=this.sanctionletterform.get('sanctionStatus').value;
    sanctionedcustomerdetails.customerSanctionLetter.sanctionLetter=this.sanctionletterform.get('sanctionletter').value;
    let data= new FormData;

        let allData =JSON.stringify(sanctionedcustomerdetails);
    
         data.append("allData",allData);
        //  data.append("sanctionletter",this.sanctionletter);

         this.cs.generateSanction(sanctionedcustomerdetails.customerId,data).subscribe();
  }
  

}
