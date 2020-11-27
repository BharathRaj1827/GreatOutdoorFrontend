import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistserviceService, Wishlist, Product } from '../wishlistservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  message: string;
  products: Product[];
  constructor(private myservice: WishlistserviceService, private router: Router) {
  }
  
  ngOnInit(): any {
    this.myservice.getProductlist().subscribe(response => this.handleSuccessfulResponse(response),
    );
  }
    handleSuccessfulResponse(response: Product[]){
      console.log(response);
      this.products =response;
    
  }
  add(productId): any{
    
    
    console.log(productId);
    this.myservice.add(productId).subscribe(backendData =>{
      console.log(backendData);
      if(backendData!=null){
        alert("Added successfully")
        this.router.navigate(['/viewwishlist']);
      }
      else
        alert("add failed")
    });
}
}
