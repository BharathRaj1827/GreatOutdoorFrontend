import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Address } from '../myservice.service';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  message: string;

 
  constructor(private myservice: MyserviceService,private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(addadrs:Address):any{
    console.log(addadrs);
     this.myservice.addAddress(addadrs).subscribe(data => {
      this.message=data});
  }

}
