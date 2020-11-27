import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { logging } from 'protractor';
//import { LoginComponent } from './login/login.component';
//import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateuser: Users;
  /*Users-------------*/
  public getUsers() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Users>("http://localhost:8885/user/GetAllUsers");
  }
  getuserbyid(id: number):Observable<any>{
    return this.httpService.get('http://localhost:8885/user/getuserbyid/'+id);
  
  }


  public addUser(adduser: Users) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/user/addUser", adduser,  { headers, responseType: 'text'});
  }
 
  public update1(updateuser:Users) {
    this.updateuser = updateuser;
  }
  public updateMethod1() {
    return this.updateuser;
  }
  public onUpdate1(updateuser: Users) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8885/user/UpdateUser", updateuser,  { headers, responseType: 'text'});
  }
  public delete1(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8885/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }

  userlogin(login:Users){
    console.log("ins service login");
    console.log(login);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8885/user/Loginuser", login,  { headers, responseType: 'text'});
  }
  public sharedId={};

  public loginAdmin(aname:string, apwd:string){
    return this.httpService.get("http://localhost:8885/Reports/valid/"+aname+"/"+apwd,{responseType:'json'});
  }

  public getSalesData(salesInput: MyForm) {
    console.log(salesInput)
    return this.httpService.get("http://localhost:8885/Reports/SalesReport/" + salesInput.date1 + "/" + salesInput.date2 + "/" + salesInput.userid + "/" + salesInput.category, {responseType: 'json' });

  }
  public getRevenueData(revenueInput: MyForm) {
    console.log(revenueInput)
    return this.httpService.get<RevenueReport>("http://localhost:8885/Reports/GrowthReport/" + revenueInput.date1 + "/" + revenueInput.date2 + "/" + revenueInput.category, { responseType: 'json' });
  }



/*Address*/

updateaddress: Address;
public getAllAddress() {
  console.log("ins service get address");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Address>("http://localhost:8885/address/getAllAddress");
}
public getAddress() {
  console.log("ins service get address");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Address>("http://localhost:8885/address/getaddress/{addressId}");
}

public addAddress(addAddress: Address) {
  console.log("ins service add");
  console.log(addAddress);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post("http://localhost:8885/address/addaddress", addAddress,  { headers, responseType: 'text'});
}

public update2(updateAddress: Address) {
  this.updateaddress = updateAddress;
}
public updateMethod2() {
  return this.updateaddress;
}
public onUpdate2(updateAddress: Address) {
  console.log("ins service update");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:8885/address/updateAddress", updateAddress,  { headers, responseType: 'text'});
}
delete2(addressId: number) {
  console.log("ins service delete");
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.delete("http://localhost:8885/address/deleteaddress/" + addressId,  { headers, responseType: 'text'});
}




  /*Product-------------*/
  updateproduct:   Products;
  constructor(private httpService: HttpClient) { }
  public getProducts() {
    console.log("ins service get products");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Products>("http://localhost:8885/product/GetAllProducts");
  }
  public addProduct(addproduct: Products) {
    console.log("ins service add");
    console.log(addproduct);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/product/add", addproduct,  { headers, responseType: 'text'});
  }
  public update(updateproduct: Products) {
    this.updateproduct = updateproduct;
  }
  public updateMethod() {
    return this.updateproduct;
  }
  public onUpdate(updateproduct: Products) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8885/product/UpdateProduct", updateproduct,  { headers, responseType: 'text'});
  }
  public getproductbyid(getproductById: string) {
    console.log("ins service add");
    console.log(getproductById);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8885/product/GetProduct/" +getproductById ,{responseType: 'json'});
  }

  public searchproductByproductname(searchproductbyproductName: string) {
    console.log("ins service add");
console. log(searchproductbyproductName);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8885/product/searchproductbyproductName/" +searchproductbyproductName,  { responseType: 'json'});
  }
  public searchproductByproductcategory(searchproductbyproductCategory: string) {
    console.log("ins service add");
console. log(searchproductbyproductCategory);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8885/product/searchproductbyproductCategory/" +searchproductbyproductCategory,  { responseType: 'json'});
  }
  delete(id: string) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8885/product/DeleteProduct/" + id,  { headers, responseType: 'text'});
  }
  public getProductsData(minprice:number,maxprice:number)
  {
	  console.log("inservice");
    return this.httpService.get<Products>("http://localhost:8885/product/FilterProducts/"+minprice+"/"+maxprice);
  }	



  /*cart*/
  updateCartItem(updatecartitem: CartItem) {
    this.updatecartitem=updatecartitem;
  }

 
  cartitem(u:CartItem){
    throw new Error("method not implemented.");
  }
  updatecartitem:CartItem;
  public updatecartitemMethod() {
    return this.updatecartitem;
  }
  
  delete3(cartId:number) {
    console.log("ins service delete");
    const headers=new HttpHeaders().set('Content_Type','text/plain;charset=utf-8')
    return this.httpService.delete("http://localhost:8885/cart/deleteCartItem/"+cartId,{headers,responseType:'text'});
  }
  public onUpdateCartItem(updatecartitem: CartItem) {
    console.log("ins service update");
    const headers=new HttpHeaders().set('Content_Type','text/plain;charset=utf-8')
    return this.httpService.put("http://localhost:8885/cart/updateCartItem/",this.updatecartitem,{headers,responseType:'text'});
  }

  
  
  public addToCart(addToCart: CartItem) {
    console.log("ins service add");
    console.log(addToCart);
    const headers=new HttpHeaders().set('Content_Type','text/plain;charset=utf-8')
    return this.httpService.post("http://localhost:8885/cart/addToCart",addToCart,{headers,responseType:'text'});
    
  }
  
  public getAllCartItems() {
    console.log("ins service get address");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<CartItem>("http://localhost:8885/cart/getAllCartItems");
  }
public getCartItemByUserId() {
   console.log("ins serivce get cartitems");
   const headers=new HttpHeaders().set('Content_Type','text/plain;charset=utf-8')
   return this.httpService.get<CartItem>("http://localhost:8885/cart/getCartItemsByUserId/{userId}");
  }

}
/*wishlist*/

   

/*User-------------*/
export class Users {
  userId: number;
  userPhoneno: number;
  userPassword: string;
  userEmail:string;
  userType:string;
}


export class MyForm {
  date1: Date;
  date2: Date;
  category: string;
  userid: string;
}
export class RevenueTable {
  userid: string;
  date1: Date;
  orderid: number
  productid; number;
  productCategory: string;
  productPrice: number;

}
export class RevenueReport {
  period: string;
  revenue: number
  change: number
  percentagegrowth: number
  colorcode: string;
}


/*Address*/
export class Address {
  addressId: number;
  userId: number;
  buildingNo: number;
  city: string;
  state: string;
  pincode:number;
}
/*Product-------------*/
export class Products {
  
  id: string;
  colour: string;
  price: number;
  dimensions: string;
  specifications: string;
  manufacture: string;
  quantity: number;
  productCategory:string;
  productName: string;
  retailerId:number;
}
/*cartitem*/
export class CartItem{
  userId:String;
  cartId:number;
  productId:String;
  cartItemPrice:number;
  quantity:number;
}
/*wishlist*/
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
