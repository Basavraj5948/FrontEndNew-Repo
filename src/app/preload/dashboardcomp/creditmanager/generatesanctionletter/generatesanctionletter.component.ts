import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { SanctionLetter } from 'src/app/classes/sanction-letter';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-generatesanctionletter',
  templateUrl: './generatesanctionletter.component.html',
  styleUrls: ['./generatesanctionletter.component.scss']
})
export class GeneratesanctionletterComponent implements OnInit {


  constructor(public activateroute: ActivatedRoute, private fb: FormBuilder, private cs: CommonserviceService) { }


  customerdetails: Customerdetails;

  sanctionletterform: FormGroup;
  emicheckform: FormGroup;

  interest: number;
  totalRepayment: number
  emi: number;
  tenure: any;



  ngOnInit(): void {
    // this.activateroute.paramMap.subscribe(param=>
    //   {
    //     this.customerdetails=JSON.parse(param.get('data'));
    //     console.log(this.customerdetails);
    //   })
    this.activateroute.queryParams.subscribe((params) => {
      console.log(params)
      this.customerdetails = JSON.parse(params['data']);
    })
console.log(this.customerdetails);
    this.emicheckform = this.fb.group({
      loanAmount: 0,
      rateOfInterest: 0,
      Tenure: 0
    });

    this.sanctionletterform = this.fb.group({
      sanctionId: [this.cs.santionletter.sanctionId],
      sanctionDate: [this.cs.santionletter.sanctionDate],
      applicantName: [this.cs.santionletter.applicantName],
     
      loanAmountSanctioned: [this.cs.santionletter.loanAmountSanctioned],
      rateOfInterest: [this.cs.santionletter.rateOfInterest],
      loanTenure: [this.cs.santionletter.loanTenure],
      monthlyEmiAmount: [this.cs.santionletter.monthlyEmiAmount],
      termsAndCondition: [this.cs.santionletter.termsAndCondition],
      
      sanctionletter: [this.cs.santionletter.sanctionLetter],
    })
  }

  emicheck() {
    alert("emi check from")
    this.interest = this.emicheckform.get('rateOfInterest').value / (12 * 100);
    this.tenure = this.emicheckform.get('Tenure').value;

    this.emi = (this.emicheckform.get('loanAmount').value * this.interest *
      Math.pow(1 + this.interest, this.tenure)) /
      (Math.pow(1 + this.interest, this.tenure) - 1);
    this.totalRepayment = this.emi * this.tenure;
  }

  generateSanction() {
    this.cs.santionletter.sanctionId = this.sanctionletterform.get('sanctionId').value;
    this.cs.santionletter.sanctionDate = this.sanctionletterform.get('sanctionDate').value;
    this.cs.santionletter.applicantName = this.sanctionletterform.get('applicantName').value;
    
    this.cs.santionletter.loanAmountSanctioned = this.sanctionletterform.get('loanAmountSanctioned').value;
    this.cs.santionletter.rateOfInterest = this.sanctionletterform.get('rateOfInterest').value;
    this.cs.santionletter.loanTenure = this.sanctionletterform.get('loanTenure').value;
    this.cs.santionletter.monthlyEmiAmount = this.sanctionletterform.get('monthlyEmiAmount').value;
    this.cs.santionletter.termsAndCondition = this.sanctionletterform.get('termsAndCondition').value;
    
    this.cs.santionletter.sanctionLetter = this.sanctionletterform.get('sanctionletter').value;

    this.cs.generateSanction(this.customerdetails.customerId).subscribe();
  }


}
