import { Component, OnInit } from '@angular/core';
import { Products, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  message: string;
  products: Products[];
  constructor(private myservice: MyserviceService, public router: Router) { }

  ngOnInit(): any { 
    this.myservice.getProducts().subscribe(
    response => this.handleSuccessfulResponse(response),
  );
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.products = response;
  }
  update(updateproduct: Products) {
    this.myservice.update(updateproduct);
    this.router.navigate(['/updateproduct']);
  }
 /* delete(deleteproduct: Products): any {
    this.myservice.delete(deleteproduct.id).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listproduct']);
  }*/
  delete(deleteproduct: Products): any 
  {
     var r = confirm("Are you sure to delete program permanently?");
     if(r==true)
     {
      this.myservice.delete(deleteproduct.id).subscribe(data => {
        this.message = data
     });
    
     }
     else
    {
      alert("Operation Cancelled");
    }
  }
}
