import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  message:string;
  cartitem:CartItem[];
  constructor(private cartservice:MyserviceService,private router:Router) { }

  ngOnInit():any {
    this.cartservice.getAllCartItems().subscribe(
      response=>this.handleSuccessfulResponse(response),
    );

  }


  handleSuccessfulResponse(response){
    this.cartitem=response;
  }

  updatecartitem(updatecartitem:CartItem){
    this.cartservice.updateCartItem(updatecartitem);
    this.router.navigate(['updatecart']);
  }

  delete3(deletecartitem:CartItem):any{
    this.cartservice.delete3(deletecartitem.cartId).subscribe(data=>{
      this.message=data
    });
    this.router.navigate(['viewcart']);
  }

}
