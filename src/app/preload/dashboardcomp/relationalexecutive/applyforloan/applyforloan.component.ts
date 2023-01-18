import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-applyforloan',
  templateUrl: './applyforloan.component.html',
  styleUrls: ['./applyforloan.component.scss']
})
export class ApplyforloanComponent {

  constructor(private fb: FormBuilder,private cs:CommonserviceService) { }

  isLinear = true;

  ngOnInit(): void {

  }

  Empregister = this.fb.group({

    customerdetails: this.fb.group({
      customerId:[],
      customerFirstName: this.fb.control('', Validators.required),
      customerMiddleName: this.fb.control('', Validators.required),
      customerLastName: this.fb.control('', Validators.required),
      customerMobileNumber: this.fb.control(0, Validators.required),
      customerAdditionalMobileNumber: this.fb.control(0, Validators.required),
      customerPanCard: this.fb.control('', Validators.required),
      customerGender:this.fb.control(''),
      customerAadharCard: this.fb.control(0, Validators.required),
      customerDateOfBirth: this.fb.control('', Validators.required),
      customerEmail: this.fb.control('', Validators.required),
      customerQualification: this.fb.control('', Validators.required),
      customerCibilScore: this.fb.control(0, Validators.required),
      customerLoanStatus: this.fb.control('')

    }),
    customerAddress: this.fb.group({       
      addressId:0,
      localAreaName: this.fb.control('', Validators.required), 
      localCityName: this.fb.control('', Validators.required),  
      localDistrict: this.fb.control('', Validators.required),  
      localState: this.fb.control('', Validators.required), 
      localPincode: this.fb.control(0, Validators.required), 
      localHouseNumber: this.fb.control(0, Validators.required), 
      localStreetName: this.fb.control('', Validators.required),  
      permanentAreaName: this.fb.control('', Validators.required),
      permanentCityName: this.fb.control('', Validators.required), 
      permanentDistrict: this.fb.control('', Validators.required),  
      permanentState: this.fb.control('', Validators.required),  
      permanentPincode: this.fb.control(0, Validators.required), 
      permanentHouseNumber: this.fb.control(0, Validators.required), 
      permanentStreetName: this.fb.control('', Validators.required) 
    }),
    customerProfession: this.fb.group({
      professionId:0, 
      professionType: this.fb.control('', Validators.required),
      professionMonthlyIncome: this.fb.control(0, Validators.required),
      professionDesignation: this.fb.control('', Validators.required)
    }),
    customerBankDetails: this.fb.group({
      customerBankDetailsId:0, 
      customerBankAccountNumber: this.fb.control(0, Validators.required),
      customerBankName: this.fb.control('', Validators.required),
      customerBankBranchName: this.fb.control('', Validators.required),
      customerBankIfscNumber: this.fb.control('', Validators.required)
    }),

    customerDealer: this.fb.group({
      dealerId: 0, 
      dealerName: this.fb.control('', Validators.required),
      dealerAddress: this.fb.control('', Validators.required),
      dealerBankAccountNumber: this.fb.control(0,Validators.required),
      dealerBankName: this.fb.control('', Validators.required),
      dealerBankBranchName: this.fb.control('', Validators.required),
      dealerBankIfscNumber: this.fb.control('', Validators.required)
    }),
    customerVehicleInformation: this.fb.group({
      customerVehicleId:0, 
      customerVehicleModel: this.fb.control('', Validators.required),
      // customerVehicleChassis: this.fb.control('', Validators.required),
      // customerVehicleNumber: this.fb.control('', Validators.required),
      // customerVehicleRcNumber: this.fb.control('', Validators.required)
    }),
    customerAllDocuments: this.fb.group({
      documentId:0, 
      panCard: this.fb.control('', Validators.required),
      incomeProof: this.fb.control('', Validators.required),
      aadharCard: this.fb.control('', Validators.required),
      photo: this.fb.control('', Validators.required),
      signature: this.fb.control('', Validators.required),
      bankPassBook: this.fb.control('', Validators.required)
    }),

  });

  get customerform() {
    return this.Empregister.get("customerdetails") as FormGroup;
  }
  get addressdetailsform() {
    return this.Empregister.get("customerAddress") as FormGroup;
  }
  get professionDetailsform() {
    return this.Empregister.get("customerProfession") as FormGroup;
  }
  get bankdetailsform() {
    return this.Empregister.get("customerBankDetails") as FormGroup;
  }
  get dealerDetailsform() {
    return this.Empregister.get("customerDealer") as FormGroup;
  }
  get vehicleDetailsform() {
    return this.Empregister.get("customerVehicleInformation") as FormGroup;
  }
  get alldocumentsform() {
    return this.Empregister.get("customerAllDocuments") as FormGroup;
  }
  panCard: any;
  incomeProof: any;
  photo: any;
  signature: any;
  aadharCard: any;
  bankPassBook: any;

  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}
  onselectfile1(event) {
    this.panCard = event.target.files[0];
  }
  onselectfile2(event) {
    this.incomeProof = event.target.files[0];
  }
  onselectfile3(event) {
    this.photo = event.target.files[0];
  }
  onselectfile4(event) {
    this.aadharCard = event.target.files[0];
  }
  onselectfile5(event) {
    this.signature = event.target.files[0];
  }
  onselectfile6(event) {
    this.bankPassBook = event.target.files[0];
  }
  filename: 'Photo'
  
  
  HandleSubmit() {
    
    this.cs.customerdetails.customerFirstName=this.Empregister.get("customerdetails").get("customerFirstName").value
    this.cs.customerdetails.customerMiddleName=this.Empregister.get("customerdetails").get("customerMiddleName").value
    this.cs.customerdetails.customerLastName=this.Empregister.get("customerdetails").get("customerLastName").value
    this.cs.customerdetails.customerMobileNumber=this.Empregister.get("customerdetails").get("customerMobileNumber").value
    this.cs.customerdetails.customerAdditionalMobileNumber=this.Empregister.get("customerdetails").get("customerAdditionalMobileNumber").value
    this.cs.customerdetails.customerPanCard=this.Empregister.get("customerdetails").get("customerPanCard").value
    this.cs.customerdetails.customerAadharCard=this.Empregister.get("customerdetails").get("customerAadharCard").value
    this.cs.customerdetails.customerDateOfBirth=this.Empregister.get("customerdetails").get("customerDateOfBirth").value
    this.cs.customerdetails.customerEmail=this.Empregister.get("customerdetails").get("customerEmail").value
    this.cs.customerdetails.customerGender=this.Empregister.get("customerdetails").get("customerGender").value
    this.cs.customerdetails.customerQualification=this.Empregister.get("customerdetails").get("customerQualification").value
    this.cs.customerdetails.customerCibilScore=this.Empregister.get("customerdetails").get("customerCibilScore").value
    this.cs.customerdetails.customerLoanStatus=this.Empregister.get("customerdetails").get("customerLoanStatus").value
    
    this.cs.customerdetails.customerAddress=this.Empregister.get("customerAddress").value
    this.cs.customerdetails.customerAddress.addressId=this.Empregister.get("customerAddress").get("addressId").value

    this.cs.customerdetails.customerProfession=this.Empregister.get("customerProfession").value
    this.cs.customerdetails.customerProfession.professionId=this.Empregister.get("customerProfession").get("professionId").value
 
    this.cs.customerdetails.customerBankDetails= this.Empregister.get("customerBankDetails").value
    this.cs.customerdetails.customerBankDetails.customerBankDetailsId= this.Empregister.get("customerBankDetails").get("customerBankDetailsId").value
    this.cs.customerdetails.customerDealer= this.Empregister.get("customerDealer").value
     this.cs.customerdetails.customerDealer.dealerId= this.Empregister.get("customerDealer").get("dealerId").value
    this.cs.customerdetails.customerVehicleInformation= this.Empregister.get("customerVehicleInformation").value
    this.cs.customerdetails.customerVehicleInformation.customerVehicleId= this.Empregister.get("customerVehicleInformation").get("customerVehicleId").value


  // return this.Empregister.get("customerAllDocuments").value




    let data = new FormData();

    let allData = JSON.stringify(this.cs.customerdetails)   //customerid from Form to Json


    data.append("allData", allData);
    data.append("panCard", this.panCard);   //binds media file to data with form data 
    data.append("incomeProof", this.incomeProof);
    data.append("aadharCard", this.aadharCard);
    data.append("photo", this.photo);
    data.append("signature", this.signature);
    data.append("bankPassBook", this.bankPassBook);

    
    this.cs.saveCustomer(data).subscribe();
    alert('saved');
  }
  // panCard: any;
  // incomeProof: any;
  // photo: any;
  // signature: any;
  // aadharCard: any;
  // bankPassBook: any;
}
