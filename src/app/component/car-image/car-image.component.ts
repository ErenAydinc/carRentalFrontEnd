import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  cars:Car[]=[];

  
  imageBasePath="https://localhost:44373/"
  constructor(private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  
}
