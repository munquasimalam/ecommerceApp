import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';
import {Category} from './category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categoryList : Category[] = [];
  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data =>{
    this.categoryList = data;
    })
  }
  // productsByCategoryId(id: string) {
  //   console.log(id);
  //   alert(id);
  //  this.router.navigate(['/search-cat']);
  // }

}
