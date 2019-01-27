import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShippingDetail } from './shipping-detail';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../cart/cart.service';
import { Router } from "@angular/router";
import {ComponentCanDeactivate} from "../guards/pending-changes.guards";

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit,ComponentCanDeactivate {

  constructor(private cartService: CartService,
    private notificationsService: NotificationsService,
    private router: Router) { }

  cities = [];
  model: ShippingDetail = new ShippingDetail("", "", true, -1);
  
  isDirty:boolean=false;
  //sayfada dirty yani üzerinde çalışılmış bir kutucuk varsa o zaman biz bunu false döndürmeliyiz.
//bu yüzden isDirty tanımadık dirty kirli değil ilk sayfaya geldiğinde.
  canDeactivate():boolean{
    //bu sayfadan başka bir noktaya gidebilir mi dirty nin tam tersini yazmamız gerek. 
        return !this.isDirty; //tersi dönecek ondan ! koyduk.
  }
  
  
  //öncelikle şehirler varsa o şehirleri doldurmamız lazım.
  //şimdilik elle yazıcaz şehirleri

  
  ngOnInit() {
    this.cities.push(
      { "id": "1", "name": "Ankara" },
      { "id": "1", "name": "İstanbul" },
      { "id": "1", "name": "London" },
    )
  }

  checkout(form: NgForm) {//ngform cinsinden bir form parametre olarak verdik form göndericez burdan
      if(form.invalid){
        return;
      }
      this.cartService.clear();//sepeti boşalt
      this.notificationsService.info("Succesfull","Shopping completed");
      this.router.navigate(["products"]);//bu işlemi yaptığu zaman kişiyi anasayfyaa göderelim.
      //burada gerekli olan routera yönlendiriyoruz.

  }

}
