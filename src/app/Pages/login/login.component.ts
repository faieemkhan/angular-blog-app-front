import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';
  constructor(private authService: AuthService, private route: Router) { }
  Submit() {
    this.authService.LoginUser(this.Email, this.Password).subscribe(res => {
      // console.log(res);
      this.authService.onLoginComponentButtonClick(this.Email)
      sessionStorage.setItem('email', this.Email)
      this.route.navigate([''])
    },
      err => {
        Swal.fire(
          'some thing Wrong',
          err.error,
          'error',
        )

      })

  }
}
