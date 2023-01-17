import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private router:Router){}

  login:FormGroup;

  ngOnInit()
  {
    this.login=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

 //for validation purpose---- 
  get username()
  {
    return this.login.get('username');
  }

  get password()
  {
    return this.login.get('password');
  }

  loginMethod()
  {
      if(this.login.get("username").value==="oe" && this.login.get("password").value==="oe")
      {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Log in Successfull for Operation Executive',
          showConfirmButton: false,
          timer: 2000
        })
          localStorage.setItem("role","operationalexc");
          this.router.navigateByUrl("/dashboard/operationalexc");
         
          
      }
       else if(this.login.get("username").value==="re" && this.login.get("password").value==="re")
      {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Log in Successfull for Relational Executive',
          showConfirmButton: false,
          timer: 2000
        })
          localStorage.setItem("role","relationalexe");
          this.router.navigateByUrl("/dashboard/relationalexe");
      }
      else if(this.login.get("username").value==="ah" && this.login.get("password").value==="ah")
      {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Log in Successfull for Account Head',
          showConfirmButton: false,
          timer: 2000
        })
          localStorage.setItem("role","accounthead");
          this.router.navigateByUrl("/dashboard/accounthead");
      }
      else if(this.login.get("username").value==="cm" && this.login.get("password").value==="cm")
      {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Log in Successfull for Credit Manager',
          showConfirmButton: false,
          timer: 2000
        })
          localStorage.setItem("role","creditmanager");
          this.router.navigateByUrl("/dashboard/creditmanager");
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Unsuccessfull! Please Register',
        })

      }
      

  }

}
