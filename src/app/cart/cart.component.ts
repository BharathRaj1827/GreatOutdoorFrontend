import { Component, OnInit } from '@angular/core';
import { MyserviceService, CartItem } from '../myservice.service';
import { Router ,Routes} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  message:string;
  constructor(private cartservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(addToCart:CartItem):any{
    console.log(addToCart);
    this.cartservice.addToCart(addToCart).subscribe(data=>{
      this.message=data
    });

  }

}
