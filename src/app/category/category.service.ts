import { Injectable ,Inject} from '@angular/core';
import {Product} from '../product/product';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';

import {Category} from './category';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:Http,
    @Inject("apiUrl") private apiUrl) { }

    url:string=this.apiUrl+"/categories";
    
    getCategories():Observable<Category[]>{
      return this.http.get(this.url).map(response=>response.json());
      
    }
}
