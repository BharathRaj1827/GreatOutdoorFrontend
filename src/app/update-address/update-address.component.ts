import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Address } from '../myservice.service';
@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  obj1: any;
  adrs: Address[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod2();
  }
  onUpdate2(updateAddress: Address): any {
    return this.myservice.onUpdate2(updateAddress).subscribe(data => {
      this.message = data
    });
  }

  ngOnInit(): void {
  }

}
