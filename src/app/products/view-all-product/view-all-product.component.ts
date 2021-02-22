import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../dataShare.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
productList:Product[] = [];
  constructor(private productService:ProductService,private dataShareService: DataShareService) { }

  ngOnInit(): void {
this.productService.getProducts().subscribe(data=>{
  this.productList = data;
  
})
  }

}
