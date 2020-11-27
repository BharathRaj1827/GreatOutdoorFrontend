import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistserviceService, Wishlist } from '../wishlistservice.service';


@Component({
  selector: 'app-viewwhishlist',
  templateUrl: './viewwhishlist.component.html',
  styleUrls: ['./viewwhishlist.component.css']
})
export class ViewwhishlistComponent implements OnInit {
  message: string;
  wishlist: Wishlist[];
  constructor(private myservice: WishlistserviceService, private router: Router) { }

  

  ngOnInit(): void {
    this.myservice.getWhishlist().subscribe(response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: Wishlist[]): any {
    console.log(response);
    this.wishlist = response;
  }
}
