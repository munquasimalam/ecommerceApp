import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/sidebar/category';
import { DataShareService } from '../dataShare.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategoryId:string = '';
  productList:Product[] = [];
  constructor(private activatedRoute:ActivatedRoute ,private productService:ProductService,private dataShareService:DataShareService) { 
   
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
    this.searchCategoryId = data.id;
    })
this.productService.searchCategoryProduct(this.searchCategoryId).subscribe(categoryData=>{
  this.productList = categoryData;
})
  }
  sendProductDetail(obj:Product){
    //alert(JSON.stringify(obj));
    this.dataShareService.emit<string>('data from com1');
   
    

  }
}
