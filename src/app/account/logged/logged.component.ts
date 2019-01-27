import { Component, OnInit,DoCheck } from '@angular/core';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css'],
})
export class LoggedComponent implements DoCheck{

  isLogged=false;
  constructor(private accountService:AccountService,
              private router:Router) { }

  ngDoCheck() {
      this.isLogged = this.accountService.isLoggedIn(); 
//burdan true veya false gelmesine göre kullanıcıyı takip edeceğiz.

  }

  logOut(){
    this.accountService.logout();
    this.router.navigate(["account"]);
  }
}
