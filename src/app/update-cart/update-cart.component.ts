import { Component, OnInit } from '@angular/core';
import { CartItem, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  obj1:any;
  cartitem:CartItem[];
  message:string;
  constructor(private cartservice:MyserviceService,private router:Router) { 
    this.obj1=this.cartservice.updatecartitemMethod();
  }

  onUpdatecartitem(ucartitem:CartItem):any{
    return this.cartservice.onUpdateCartItem(ucartitem).subscribe(data=>{
      this.message=data
    });
  }
  ngOnInit(): void {
  }

}
