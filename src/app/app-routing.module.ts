import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { BrandComponent } from './component/brand/brand.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { CarImageComponent } from './component/car-image/car-image.component';
import { CarComponent } from './component/car/car.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { RentalComponent } from './component/rental/rental.component';

const routes: Routes = [
  {path:" ",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/details/:carId",component:CarImageComponent},
  {path:"cars/rentals/:carId",component:RentalComponent},
  {path:"customers",component:CustomerComponent},
  {path:"cars/brand",component:BrandComponent},
  {path:"cars/rentals",component:RentalComponent},
  {path:"cars/getcarsbybrandidandcolorid/:brandId/:colorId",component:CarComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"payments/add",component:PaymentComponent},
  {path:"cars/payment",component:PaymentComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
