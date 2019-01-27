import { Component, OnInit } from '@angular/core';
import {Product} from './product';
//import {ProductList} from './product-list.mock';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications';
import {CartService} from '../cart/cart.service';
import {ActivatedRoute} from '@angular/router';
import {Pager} from '../app-pager';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  products:Product[];
  addedProduct:string;
  pager:Pager=new Pager();//hemen buraya bir pager nesnesi oluşturuyoruz ki angular onu görebilsin.
  //aksi taktirde pager ı yakalamayacak.
  constructor(private productService: ProductService,
    private notificationService:NotificationsService,
    private cartService:CartService,
    private activatedRoute:ActivatedRoute
  ) {
      //this.products = ProductList;

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getProducts(params["seoUrl"]);
    })
  }

  getProducts(seoUrl:string){
    this.productService.getProducts(seoUrl)
    .subscribe(p=>{
      this.products = p;
      this.pager = this.getPager(p.length);//html de görebileceğimiz pager nesnesini this.getpager deyip
      //kaç tane elemanım var bana onu söyle bende kaç tane elemanım varsa ona göre pageSize vs 
      //dikkate alarak sana bir pager oluşturayım.
      //subscribe'ın içine yazıyoruz.Çünkü asenkron bir operasyon.
    });
  }

  addToCart(product:Product){
    this.addedProduct=product.productName;
    this.cartService.addToCart(product);
    this.notificationService.success("Succesfull ",product.productName+" added to cart");
  }


  getPager(totalItems:number,currentPage:number=1,pageSize:number=3):Pager{
      let totalPages =  Math.ceil(totalItems/pageSize); //Sayfalama için kaç tane link kullnıcam.
      let pages:Array<number>=[];
      for(let i=1;i<totalPages;i++){
          pages.push(i);
      }


      var pager = new Pager();//app-pager.ts nin nesnesini oluşturup içindeki elemanları  
                              //alıp fonksiyonumuzdaki parametrelerin atamasını yaptık.
      pager.currentPage=currentPage;
      pager.pageList=pages;
      pager.pageSize=pageSize;

      
      return pager;
    }

    setPage(page:number){
      this.pager.currentPage = page;
    }
}
