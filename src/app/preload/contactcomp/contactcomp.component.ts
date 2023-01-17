import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactcomp',
  templateUrl: './contactcomp.component.html',
  styleUrls: ['./contactcomp.component.scss']
})
export class ContactcompComponent {

  contactus()
  {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Send Successfully',
      showConfirmButton: true,
      timer: 2000
    })
  }
}
