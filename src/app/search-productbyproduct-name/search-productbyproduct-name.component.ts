import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-search-productbyproduct-name',
  templateUrl: './search-productbyproduct-name.component.html',
  styleUrls: ['./search-productbyproduct-name.component.css']
})
export class SearchProductbyproductNameComponent implements OnInit {
  
  productName:string;
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
    this.myservice.searchproductByproductname(this.productName).subscribe((data)=>this.Product=data);
    
      this.search= true;
    }
  }