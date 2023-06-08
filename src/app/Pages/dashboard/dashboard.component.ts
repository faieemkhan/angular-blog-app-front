import { Component, OnInit, ViewChild, NgZone  } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Email: any
  DrawerLogoName : string = 'close'
  screenSize : any;
  constructor(private authService: AuthService,private ngZone: NgZone) { 
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            console.log(window.innerWidth);
            console.log(window.innerHeight);
            this.screenSize = window.innerWidth;
        });
    };
  }
  ngOnInit() {
    this.Email = sessionStorage.getItem('email')
  }
  @ViewChild('drawer') sidenav: any;
  opened: any = false;
  onClick() {
    if (this.sidenav.opened) {
      this.sidenav.opened = false
      this.DrawerLogoName = 'menu'
    }
    else {
      this.sidenav.opened = true
      this.DrawerLogoName = 'close'
    }
  }
  

}
