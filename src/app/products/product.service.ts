import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/sidebar/category';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }
  createProduct(productBody:any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products";
    return this.httpClient.post<Product>(baseUrl,productBody);
  }
  viewProduct(productId:number):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.httpClient.get<Product>(baseUrl);
  }

  updateProduct(productId:number,productBody:any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);
  }
  deleteProduct(productId:number):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(categoryId:string):Observable<Product[]>{
    const baseUrl = "http://localhost:3000/products?categoryId="+categoryId;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  searchDateProduct(dateParam:string):Observable<Product>{
    const baseUrl = "http://localhost:3000/products"+dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory():Observable<Category[]>{
    const categoryUrl = "http://localhost:3000/categories";
    return this.httpClient.get<Category[]>(categoryUrl);
  }

  getProducts():Observable<Product[]>{
    const baseUrl = "http://localhost:3000/products";
    return this.httpClient.get<Product[]>(baseUrl);
  }
}
