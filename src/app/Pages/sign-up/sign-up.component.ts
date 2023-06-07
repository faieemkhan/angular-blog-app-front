import { Component } from '@angular/core';
import { User } from 'src/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  user: User
  confirmPassword: string = ''
  fName: string = ''
  lName: string = ''
  err: string = ''
  isClickBtn: boolean = false
  constructor(private authService: AuthService) {
    this.user = new User();
  }
  SignUpClick() {
    if (this.confirmPassword != this.user.password) {
      this.err = 'Password Not Matched'
    }
    else {
      this.err = ''
      this.isClickBtn = true
      this.user.name = this.fName + ' ' + this.lName
      this.authService.SignUpUser(this.user).subscribe(result => {
        // console.log(typeof(result));
        if (result) {
          Swal.fire(
            'Success!',
            'You Rigestered Successfully!',
            'success'
          )
          this.fName = ''
          this.lName = ''
          this.user.email = ''
          this.user.location = ''
          this.user.password =''
        }

      },
      err => {
        console.log(err);
        
            Swal.fire(
              'error',
              'Oops...',
              'error',
            )
          
      })
      this.isClickBtn = false
    }
  }
}
