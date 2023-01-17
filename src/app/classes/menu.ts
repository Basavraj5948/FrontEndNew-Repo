export class Menu {
    public static menus:any[]=[
        {
            relationalexe:[
              {key:"enquiry",label:"View Enquiries"},
              {key:"registerenquiry",label:"Register new Enquiry"},
              {key:"cibilapproved",label:"CIBIL Approved"},
              {key:"cibilrejected",label:"CIBIL Rejected"},
              
            ], 

            operationalexc:[
                {key:"filevarification",label:"Verify Application"},
                
              ],
             creditmanager:[
                {key:"verifydetails",label:"Verify Details"},
                {key:"notificationsend",label:"Notification send to OE"},
                {key:"transfertoAH",label:"Transfer to Account Head"},
              ],
            accounthead:[
                {key:"disbursment",label:"Disbursment"},
                {key:"ledgerprocess",label:"Ledger Process"},
             ]                            
        }]
}
