import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { GetProductbyidComponent } from './get-productbyid/get-productbyid.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { SearchProductbyproductNameComponent } from './search-productbyproduct-name/search-productbyproduct-name.component';
import { SearchProductbyproductCategoryComponent } from './search-productbyproduct-category/search-productbyproduct-category.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
//import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { CartComponent } from './cart/cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { AddressManageComponent } from './address-manage/address-manage.component';
import { CartManageComponent } from './cart-manage/cart-manage.component';
import { WishManageComponent } from './wish-manage/wish-manage.component';
import { ViewwhishlistComponent } from './viewwhishlist/viewwhishlist.component';
import { AdminComponent } from './admin/admin.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    ListAddressComponent,
    AddProductComponent,
    GetProductbyidComponent,
    UpdateProductComponent,
    ProductListComponent,
    FilterProductComponent,
    SearchProductbyproductNameComponent,
    SearchProductbyproductCategoryComponent,
    AddUserComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    ViewCartComponent,
    UpdateCartComponent,
    ProductManageComponent,
    AddressManageComponent,
    CartManageComponent,
    WishManageComponent,
    AddressManageComponent,
    WishManageComponent,
    CartManageComponent,
    ProductListComponent,
    ViewwhishlistComponent,
    AdminComponent,
    SalesReportComponent,
    RevenueReportComponent,
    ViewwhishlistComponent,
    ProductListComponent,
    UserhomeComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
