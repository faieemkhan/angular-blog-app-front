import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  email : string = ''
  isUserLogin : boolean = false
  constructor(private authService : AuthService, private router : Router){ }
  ngOnInit() {
    if (this.authService.subsVar==undefined) {    
      this.authService.subsVar = this.authService.    
      invokeLoginComponentFunction.subscribe((name:string) => {    
        this.onLogin(name);    
      });    
    }   
}

onLogin(user: string) {
  //console.log("call...");
  this.email = user
  this.isUserLogin = true
  
}
Logout(){
  localStorage.clear();
  this.email = ''
  this.isUserLogin = false
  this.router.navigate(['login'])
}

}
