import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { UpdateProductComponent } from './update-product/update-product.component';
import { FilterProductComponent } from './filter-product/filter-product.component';

import { AddProductComponent } from './add-product/add-product.component';
import { GetProductbyidComponent } from './get-productbyid/get-productbyid.component';

//import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';


import { SearchProductbyproductNameComponent } from './search-productbyproduct-name/search-productbyproduct-name.component';

import { CartComponent} from './cart/cart.component';

import { UpdateCartComponent } from './update-cart/update-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { SearchProductbyproductCategoryComponent } from './search-productbyproduct-category/search-productbyproduct-category.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
//import { LoginComponent } from './login/login.component';
//import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AddressManageComponent } from './address-manage/address-manage.component';
import { CartManageComponent } from './cart-manage/cart-manage.component';
import { WishManageComponent } from './wish-manage/wish-manage.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewwhishlistComponent } from './viewwhishlist/viewwhishlist.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [{path:'listproduct',component: ProductListComponent},
{path:'userhome',component:UserhomeComponent},
{path:'adminhome',component: AdminhomeComponent},
{path:'home',component:HomeComponent},
{path:'addproduct',component: AddProductComponent},
{path:'updateproduct',component:UpdateProductComponent},
{path:'getproductbyid' ,component:GetProductbyidComponent },
{path:'searchproductbyproductname' ,component:SearchProductbyproductNameComponent },
{path:'searchproductbyproductcategory' ,component:SearchProductbyproductCategoryComponent },
{path:'filter',component:FilterProductComponent},
{path:'adduser',component:AddUserComponent},
{path:'listofaddress',component:ListAddressComponent},
{path:'addaddress',component:AddAddressComponent},
{path:'updateaddress',component:UpdateAddressComponent},
{path:'applogin',component:LoginComponent},
{path:'appcart',component:CartComponent},
{path:'viewcart',component:ViewCartComponent},
{path:'updatecart',component:UpdateCartComponent},
{path: 'productlist',component: ProductlistComponent},
{path: 'viewwhishlist',component: ViewwhishlistComponent},
{path:'address_manage',component: AddressManageComponent},
{path:'cart_manage',component: CartManageComponent},
{path:'wish_manage',component: WishManageComponent},
{path: 'product_manage',component:ProductManageComponent},
//{path:'login',component:LoginComponent},
{path:'adminLogin',component: AdminComponent},
{path:'salesreport',component:SalesReportComponent},  
{path:'revenuereport',component:RevenueReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
