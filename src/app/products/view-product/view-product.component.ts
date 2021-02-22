import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataShareService } from '../dataShare.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productId = 0;
productDetails :Product | undefined;
public dataFromCom1 = '';

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService, private dataShareService:DataShareService) {
   
   }

  ngOnInit(): void {

    // this.dataShareService.on<string>().subscribe(data1 =>{
    //   this.dataFromCom1 = data1;
    //   alert(data1);
    //   console.log("data12345:",this.dataFromCom1);
    // });

    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    })

    this.productService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
      console.log( this.productDetails);
    });

  }

  

}
