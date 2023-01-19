import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';

@Component({
  selector: 'app-generatesanctionletter',
  templateUrl: './generatesanctionletter.component.html',
  styleUrls: ['./generatesanctionletter.component.scss']
})
export class GeneratesanctionletterComponent implements OnInit {

  constructor(public activateroute:ActivatedRoute,private fb:FormBuilder){}

  customerdetails:Customerdetails;
  sanctionletter:FormGroup;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(param=>
      {
        this.customerdetails=JSON.parse(param.get('data'));
        console.log(this.customerdetails);
      })
       
    this.sanctionletter = this.fb.group({
      sanctionId: 0,
      sanctionDate: [''],
      applicantName: [''],
      contactDetails: [''],
      loanAmountSanctioned: [0],
      rateOfInterest: [0],
      loanTenure: [0],
      monthlyEmiAmount: [0],
      termsAndCondition: [''],
      sanctionStatus: [],
    })
  }

  generateSanction()
  {
    
  }


  n
}
