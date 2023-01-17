import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerAddress } from '../classes/customer-address';
import { CustomerAllDocuments } from '../classes/customer-all-documents';
import { CustomerBankDetails } from '../classes/customer-bank-details';
import { CustomerProfession } from '../classes/customer-profession';
import { CustomerVehicleInformation } from '../classes/customer-vehicle-information';
import { Dealer } from '../classes/dealer';
import { Enquirymodel } from '../classes/enquirymodel';


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
   enquiryId: 0
 }

 customerdetails:Customer={
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
  customerVehicleInformation: new CustomerVehicleInformation
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
     alert('in service')
     return this.http.post(" http://localhost:9091/customer/postCustomer",data);  
 }
}
