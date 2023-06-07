import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';  
import { User } from 'src/Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient : HttpClient) { }
  userApiBaseUrl : string = 'https://localhost:7278/api/User'
  LoginUser(Email: string, Password: string) {
    return this.httpClient.post(`${this.userApiBaseUrl}/UserLogin`,{Email,Password}, {responseType :'text'})
  }


  SignUpUser(user: User) {
    return this.httpClient.post(`${this.userApiBaseUrl}`,user)
  }

  
  invokeLoginComponentFunction = new EventEmitter();    
  subsVar: Subscription | undefined;    

    
  onLoginComponentButtonClick(Email : string) {
    this.invokeLoginComponentFunction.emit(Email);    
  }
  
  

}
