import { Injectable } from '@angular/core';
import {Product} from '../product/product';
import {CART_ITEM_LIST} from './cart-item-list';
import {CartItem} from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[];
  constructor() { }

  //sepete ekle
  addToCart(product:Product):void{
    //benim gönderdiğim product id sepetteki product id ye eşitse.
    var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);
    if(addedItem){//varsa
        addedItem.quantity+=1; // sayısını 1 arttır.
    }else{
      let cartItem = new CartItem(); //yoksa eğer bunlar
      cartItem.product=product;
      cartItem.quantity=1;
      CART_ITEM_LIST.push(cartItem);
    }

  }
  //sepet elemanlarını listele
  list():CartItem[]{
    return CART_ITEM_LIST;
  }
  //sepeti temizle
  clear(){ //
    //silme splice olarak.sıfırdan itibaren tamamını sil 
      CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
  }
  //ürün silme
  removeFromCart(product:Product){
        //direkt ürünü silicem
        var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);
        //kaçıncı indexten itibaren kaç tane sileceğini göstermek için,listede kaçıncı sırada olduğunu bulmak lazım

        var indexNo=CART_ITEM_LIST.indexOf(addedItem);
        if(indexNo!=-1){ //-1 den farklıysa o zaman cartitem listten splice et yani sil
          CART_ITEM_LIST.splice(indexNo,1);
        }
  }
}
