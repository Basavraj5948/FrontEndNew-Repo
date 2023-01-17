import { CustomerAddress } from "./customer-address";
import { CustomerAllDocuments } from "./customer-all-documents";
import { CustomerBankDetails } from "./customer-bank-details";
import { CustomerProfession } from "./customer-profession";
import { CustomerVehicleInformation } from "./customer-vehicle-information";
import { Dealer } from "./dealer";

export class Customer {
    customerId:number;

    
    customerFirstName:string;
    customerMiddleName:string;
    customerLastName:string;
    customerMobileNumber:number;
    customerAdditionalMobileNumber:number;
    customerPanCard:string;
    customerAadharCard:number;
    customerDateOfBirth:string;
    customerEmail:string;


    customerGender:string;
    customerQualification:string;
    customerCibilScore:number;
    customerLoanStatus:string;
    customerAllDocuments:CustomerAllDocuments;
    customerAddress:CustomerAddress;
    customerProfession:CustomerProfession;
    customerDealer:Dealer;
    customerBankDetails:CustomerBankDetails;
    customerVehicleInformation:CustomerVehicleInformation;
    
}
