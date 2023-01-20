import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Customerdetails } from '../classes/customerdetails';
import { CustomerAddress } from '../classes/customer-address';
import { CustomerAllDocuments } from '../classes/customer-all-documents';
import { CustomerBankDetails } from '../classes/customer-bank-details';
import { CustomerProfession } from '../classes/customer-profession';
import { CustomerVehicleInformation } from '../classes/customer-vehicle-information';
import { Dealer } from '../classes/dealer';
import { Enquirymodel } from '../classes/enquirymodel';
import { Ledger } from '../classes/ledger';
import { LoanDisbursement } from '../classes/loan-disbursement';
import { SanctionLetter } from '../classes/sanction-letter';


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  
  

  constructor(private http:HttpClient) { }

 enquirymodel:Enquirymodel={
  customerFirstName: '',
   customerLastName: '',
   panCard: '',
   aadharNumber: 0,
   emailId: '',
   mobileNumber: 0,
   cibilStatus: '',
   cibilScore: 0,
   enquiryId: 0,
 }

 customerdetails:Customerdetails={
   customerId: 0,
   customerFirstName: '',
   customerMiddleName: '',
   customerLastName: '',
   customerMobileNumber: 0,
   customerAdditionalMobileNumber: 0,
   customerPanCard: '',
   customerAadharCard: 0,
   customerDateOfBirth: '',
   customerEmail: '',
   customerGender: '',
   customerQualification: '',
   customerCibilScore: 0,
   customerLoanStatus: '',
   customerAllDocuments: new CustomerAllDocuments,
   customerAddress: new CustomerAddress,
   customerProfession: new CustomerProfession,
   customerDealer: new Dealer,
   customerBankDetails: new CustomerBankDetails,
   customerVehicleInformation: new CustomerVehicleInformation,
   customerLoanDisbursement: new LoanDisbursement,
   customerLedger: new Ledger,
   customerSanctionLetter: new SanctionLetter,
   customerLoanAmountRequired: '',
 }
 santionletter:SanctionLetter={
   sanctionId: 0,
   sanctionDate: '',
   applicantName: '',
   loanAmountSanctioned: 0,
   rateOfInterest: 0,
   loanTenure: 0,
   monthlyEmiAmount: 0,
   termsAndCondition: '',
   sanctionLetter: []
 }

 loandisbursement:LoanDisbursement={
   agreementId: 0,
   totalLoanSanctionedAmount: 0,
   transferedAmount: 0,
   amountPaidDate: '',
   paymentStatus: '',
   dealerBankAccountNumber: 0,
   dealerBankName: '',
   dealerBankIfscNumber: ''
 }

 PostEnquiry()
 {
  return this.http.post("http://localhost:9091/Enquiry/postEnquiry",this.enquirymodel);
 }

 GetEnquiryData(status:string)
 {
  return this.http.get("http://localhost:9091/Enquiry/getEnquiry/"+status);
 }

 getCIBILScore(enquiry:Enquirymodel)
 {
  return this.http.put("http://localhost:9091/Enquiry/CheckCIBIL/"+enquiry.enquiryId,enquiry);
 }

 sendMail(enquiry:Enquirymodel)
 {
  return this.http.post("http://localhost:9091/mail/sendmail",enquiry)
 }
 saveCustomer(data:any)
 {
     return this.http.post(" http://localhost:9091/customer/postCustomer",data);  
 }
 getCustomer(loanstatus:string)
 {
  return this.http.get("http://localhost:9091/customer/getCustomer/"+loanstatus+"");
 }
 getAllCustomer()
 {
  return this.http.get("http://localhost:9091/customer/getcustomer");
 }
  getSingleCustomer(id:any)
  {
    return this.http.get("http://localhost:9091/customer/getsingleCutomer/"+id);
  }

  verifydetails(customerId:number,loanstatus:any)
  {
    return this.http.put("http://localhost:9091/customer/updateCustomer/"+customerId+"",loanstatus);
  }

  getDocVerifiedApp(loanstatus: string) 
  {
    return this.http.get("http://localhost:9091/sanction/getCustomer/"+loanstatus+"");
  }
  generateSanction(customerId:number)
  {
    return this.http.put("http://localhost:9091/sanction/generatePdf/"+customerId+"",this.santionletter);
  }

  sanctionStatus(loanStatus:string,customerId:number)
  {
    return this.http.put("http://localhost:9091/sanction/sanctionUpdate/"+customerId+"",loanStatus);
  }

  disburseloan(customerId:number) {
   
    return this.http.put("http://localhost:9091/LoanDisbursement/loanDisbursementupdate/"+customerId+"",this.loandisbursement);
  }
}
 