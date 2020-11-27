import { Component, OnInit } from '@angular/core';
import { MyserviceService, Users} from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
 
  adminname:string;
  adminpassword:string;
  name:string;
  password:string;
  a:any;
  us:any;
  checkAuthentication0:boolean = true;
  checkAuthentication1:boolean = false;
  checkAuthentication2:boolean = false;


  
  constructor(private myservice: MyserviceService,private router: Router) { }


  ngOnInit(): void {
  }
  aLogin(){
    this.myservice.loginAdmin(this.adminname, this.adminpassword).subscribe((data)=>this.a=data);
    if(this.a != null){
      this.checkAuthentication1 = true;
      this.checkAuthentication2 = false;
      this.checkAuthentication0 = false;
      this.router.navigate(['/adminLogin']);
    }
    else{
      this.checkAuthentication2 = true;
      this.checkAuthentication1 = false;
    }
  }



}
