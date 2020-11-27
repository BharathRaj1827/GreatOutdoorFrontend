import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {

  constructor(private httpService : HttpClient) { }
 
 add(productId:number){
   console.log("check for productid"+productId);
  
   return this.httpService.get<any>(`http://localhost:8885/wishlist/add/${productId}`);
 }
  getProductlist() {
    console.log("ins service get products");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product[]>("http://localhost:8885/wishlist/list");
  }
  getWhishlist() {
    console.log("ins service get wishlist");
    //console.log(userId);
    //let option ={ headers:{ 'Content-Type': 'application/json;charset=utf-8'}}
   
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Wishlist[]>("http://localhost:8885/wishlist/viewwishlist/");
  }
}
export class Product{
  productId: number;
  productName: string;
  productType: string; 
  productPrice : number; 
}

export class Wishlist{
  productName: string; 
  wishlistId:number;
  constructor(productName: string,wishlistId: number)
  {
		this.productName = productName;
		this.wishlistId = wishlistId;
  }
}
