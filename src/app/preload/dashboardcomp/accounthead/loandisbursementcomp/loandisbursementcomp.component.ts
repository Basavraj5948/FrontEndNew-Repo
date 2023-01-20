import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'src/app/classes/customerdetails';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-loandisbursementcomp',
  templateUrl: './loandisbursementcomp.component.html',
  styleUrls: ['./loandisbursementcomp.component.scss']
})
export class LoandisbursementcompComponent {


  constructor(public activateroute: ActivatedRoute, private fb: FormBuilder, private cs: CommonserviceService) { }

  loandisbusrecustomer:Customerdetails;

  loandisburseform:FormGroup;

 ngOnInit(): void {
   this.activateroute.queryParams.subscribe((params) => {
    //  console.log(params)
     this.loandisbusrecustomer = JSON.parse(params['data']);
   })

   this.loandisburseform=this.fb.group({
     agreementId:[0],
     totalLoanSanctionedAmount:[0],
     transferedAmount:[0],
     amountPaidDate:[''],
     paymentStatus:[''],
     dealerBankAccountNumber:[0],
     dealerBankName:[''],
     dealerBankIfscNumber:[''],
   })
 }

 disburseloan()
 {
   this.cs.loandisbursement.agreementId=this.loandisburseform.get('agreementId').value;
   this.cs.loandisbursement.totalLoanSanctionedAmount=this.loandisbusrecustomer.customerSanctionLetter.loanAmountSanctioned;
   this.cs.loandisbursement.transferedAmount=this.loandisburseform.get('transferedAmount').value;
   this.cs.loandisbursement.amountPaidDate=this.loandisburseform.get('amountPaidDate').value;
   this.cs.loandisbursement.paymentStatus=this.loandisburseform.get('paymentStatus').value;
   this.cs.loandisbursement.dealerBankAccountNumber=this.loandisbusrecustomer.customerDealer.dealerBankAccountNumber;
   this.cs.loandisbursement.dealerBankName=this.loandisbusrecustomer.customerDealer.dealerBankName;
   this.cs.loandisbursement.dealerBankIfscNumber=this.loandisbusrecustomer.customerDealer.dealerBankIfscNumber;

   this.cs.disburseloan(this.loandisbusrecustomer.customerId).subscribe();
 }
}
