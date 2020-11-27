import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Address } from '../myservice.service';
@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {


  message: string;
  adrs: Address[];
  constructor(private myservice: MyserviceService,private router: Router) { }


  ngOnInit(): any {
    this.myservice.getAllAddress().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.adrs = response;
  }

  update2(updateAddress: Address) {
    this.myservice.update2(updateAddress);
    this.router.navigate(['/updateaddress']); //updating the address
  }

  delete2(deleteaddress: Address): any 
  {
     var r = confirm("Are you sure to delete the address permanently?");
     if(r==true)
     {
      this.myservice.delete2(deleteaddress.addressId).subscribe(data =>{
        this.message = data;
     });
    }
     else
     {
      alert("Operation Canceled");
      
     }
  }
}

