import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from './account.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit {

  returnUrl:string;
  message:string;
  constructor(private accountService:AccountService,
              private activatedRoute:ActivatedRoute,
              private router:Router ) 
    { }

    //accountService-login olma logout olma için kullanıcaz
    //activatedRoute - kişinin geldiği routerı okuyabilmek için bilgileriyle birlikte
    //routerden gelen bilgileri okumak için
    //router - kodla router yapabilmek için yani bir sayfaya yönledirmek gibi

  ngOnInit() {
    //gelir gelmez kişinin route değerlerini okuyacağız.
    this.activatedRoute.queryParams.subscribe(params=>{
      this.returnUrl = params["returnUrl"]||"products";
    })

//paramstan gelen parametre returnUrl ise veya direkt loginse products a yönlendirecek.
//returnUrl eğer varsa parametrelerdeki returnUrldir yoksa direkt olarak products tır.
//returnUrl'e parametreye gelen return url i aticaz yoksa products a yönlendiricez.  
}

  loginUser(form:NgForm){
    this.accountService.login(form.value.user,form.value.password).subscribe(t=>{
        if(t){//observable true yada false dönüyor .t true ise
          this.router.navigateByUrl(this.returnUrl);//yukarda oluşturduğunumuz returnUrl e navigate olacak.
        }else{
          this.message = "Username or password is incorrect";
        }
    })

  }
  //

}
