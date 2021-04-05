import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
   rentals:Rental[]=[]
   car:Car[]=[]
   rentalDtos:RentalDto[]=[]
   brands:Brand[]=[]
   carDto:CarDto[]=[]
   customers:Customer[]=[]

   rentDate: Date;
  returnDate: Date;
  rentBeginDate: Date;
  rentEndDate: Date;
   dataLoaded=false
  constructor(private rentalService:RentalService,private toastrService:ToastrService,private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true
    })
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDtos=response.data
    })
  }
  getRentalImages(carId:number){
    this.rentalService.getRentalImages(carId).subscribe(response=>{
      this.carDto=response.data
    })
  }
  submit(){
    this.toastrService.success("Arabanız Başarıyla Kiralanmıştır")
  }
  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10)
  }

  // create() {
  //   let rental: Rental =
  //   {
  //     carId: this.car.id,
  //     customerId: parseInt(this.customers.toString()),
  //     rentDate: this.rentDate,
  //     returnDate: this.returnDate
  //   }
  //   this.rentalService.add(rental).subscribe(repsonse=>{
  //     this.toastrService.info("Navigate to  Payment Page");
  //     this.toastrService.success("RENT OK");
  //     this.router.navigate(['/payment', JSON.stringify(rental)]);
  //   },error=>{
  //     console.info(error)
  //     this.toastrService.error(error.error)
  //     this.toastrService.error(error.error.Message)
  //   })
  // }

}
