import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';
import { CarComponent } from './component/car/car.component';
import { CustomerComponent } from './component/customer/customer.component';
import { RentalComponent } from './component/rental/rental.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarImageComponent } from './component/car-image/car-image.component';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { PaymentComponent } from './component/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CustomerComponent,
    RentalComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterPipePipe,
    FilterColorPipePipe,
    FilterBrandPipePipe,
    BrandAddComponent,
    CarAddComponent,
    ColorAddComponent,
    PaymentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
