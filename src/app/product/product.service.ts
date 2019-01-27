import { Injectable ,Inject} from '@angular/core';
import {Product} from './product';
import {ProductList} from './product-list.mock';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';

//import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
//import { map, take } from 'rxjs/operators';


//import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/tab';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:Http,@Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl:string):Observable<Product[]>{

    if(seoUrl){
      return this.http.get(this.apiUrl+"/products/"+seoUrl)
      .map(response =>response.json());
    }
    else{
      return this.http.get(this.apiUrl+"/products")
      .map(response =>response.json());
    }
    
  }
}

