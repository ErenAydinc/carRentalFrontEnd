import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
//import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  colorFilter:number
  brandFilter:number
  filterText="";
  imageBasePath="https://localhost:44373/"
  //carDtos:CarDto[]=[]
  dataLoaded=false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getCars();
    this.getColors();
    //this.getCarDtos();
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars
      }
    })
  }
  
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{  
      this.cars=response.data;
      this.dataLoaded=true
    })
    
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      //this.dataLoaded = true;
    });
  }
  getSelectBrand(brandId:number){
    if (this.brandFilter==brandId) {
      return true
    }else{
      return false
    }
  }
  // getCarDtos(){
  //   this.carService.getCarDtos().subscribe(response=>{
  //     this.carDtos=response.data;
  //   })
  // }
}
