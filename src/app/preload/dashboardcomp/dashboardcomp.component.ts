import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/classes/menu';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.scss']
})
export class DashboardcompComponent {
  constructor(private router:Router){}

userRole:any;
menus:any[];
header:any;
email:any;


ngOnInit()
{
  this.userRole=localStorage.getItem("role");
  this.menus=Menu.menus;
  if(this.userRole==="operationalexc")
  {
    this.header="Operational Executive";
    this.email="operationexe@gmail.com";
  }
  else if(this.userRole==="relationalexe")
  {
    this.header="Relational Executive";
    this.email="relationalexe@gmail.com";
  }
  else if(this.userRole==="accounthead")
  {
    this.header="Account Head";
    this.email="accounthead@gmail.com";
  }
  else if(this.userRole==="creditmanager")
  {
    this.header="Credit Manager";
    this.email="creditmanager@gmail.com";
  }
  

}

logout()
{
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Logout Successfull !!',
    showConfirmButton: false,
    timer: 2000
  })
 this.router.navigateByUrl("/login");
}

}
