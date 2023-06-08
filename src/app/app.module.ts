import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NavigationComponent } from './Pages/navigation/navigation.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { FeatureComponent } from './Pages/feature/feature.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DashboardHomeComponent } from './DashBoardPages/dashboard-home/dashboard-home.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';


import { CanvasJSAngularStockChartsModule } from '@canvasjs/angular-stockcharts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    TestimonialComponent,
    FeatureComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    CanvasJSAngularStockChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
