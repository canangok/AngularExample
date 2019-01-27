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
    var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);
    if(addedItem){
        addedItem.quantity+=1; 
    }else{
      let cartItem = new CartItem(); 
      cartItem.product=product;
      cartItem.quantity=1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list():CartItem[]{
    return CART_ITEM_LIST;
  }

  clear(){ 
      CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
  }
  removeFromCart(product:Product){
        
        var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);
      
        var indexNo=CART_ITEM_LIST.indexOf(addedItem);
        if(indexNo!=-1){ 
          CART_ITEM_LIST.splice(indexNo,1);
        }
  }
}
