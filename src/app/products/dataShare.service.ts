
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
 // product:Product | undefined 
  myProduct = {
    id :2,
    productName : "mm product"

  }
  myProduct2 = {
    id :22,
    productName : "mm product22"

  }
  //public availableProduct = new BehaviorSubject<any>();
  public availableProduct: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor() { }
  
//set
emit<T>(data:T){
  this.availableProduct.next(data);
}
 
// get OR subscribe
  on<T>():Observable<T>{
    return this.availableProduct.asObservable();
  }
 
}
