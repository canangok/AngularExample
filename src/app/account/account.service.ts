import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
//import { Observable } from "rxjs/Observable";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn = false;

  constructor(@Inject('apiUrl') private apiUrl,
    private http: Http
  ) { }

  login(username, password):Observable<boolean> {
    let url: string = this.apiUrl + "/account/login";
    let headers = new Headers();
    headers.append("Authorization", btoa(username + ":" + password));
    var requestOptions = new RequestOptions({ headers: headers });
    //Elimde bir linkl var ve bu linki gerçekleştirmek için
    //bir request option var.

    return this.http.post(url, JSON.stringify({ username, password }), requestOptions)
      .map(res => res.json())
      .map(res => {
        if (res) {
          localStorage.setItem("isLogged", res);
          this.loggedIn = true;
        }
        return res;
      });
    //Bir kulanıcı adı şifresi oluşturduk.onu post operasyonuyla url e map ettik gönderdik ve map işlemiyle bizim 
    //servisimizin döndürdüğü değeri yakaladık true veya false dönüyor o dönen true veya false için
    //olayları gerçekleştridik.truysa local stroege e ekledik. kullanı adı şifresi doğru değilse false olarak tamamlayacak.

  }

  
  //çıkış için localStroge e removeITem dedik. isLogged değişkeni içini.
  logout() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

  //Giriş yapılmış mı kullanıcı online mı
  isLoggedIn() {
    return this.loggedIn;
  }
}
