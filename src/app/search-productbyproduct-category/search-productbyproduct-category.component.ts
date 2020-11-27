import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-search-productbyproduct-category',
  templateUrl: './search-productbyproduct-category.component.html',
  styleUrls: ['./search-productbyproduct-category.component.css']
})
export class SearchProductbyproductCategoryComponent implements OnInit {
  
  productCategory:string;
  search:boolean=false;
  search1:boolean=false;
  Product:any;
  private router: Router
  constructor(private myservice: MyserviceService, router: Router) {
    this.router=router;
  }
  ngOnInit(): any {
  }
  getStatus(){
    this.myservice.searchproductByproductcategory(this.productCategory).subscribe((data)=>this.Product=data);
    
      this.search= true;
    }
  }