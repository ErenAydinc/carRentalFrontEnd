import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  payAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private paymentService:PaymentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createPayAddForm();
  }

  createPayAddForm(){
    this.payAddForm=this.formBuilder.group({
      fullName:["",Validators.required],
      creditNumber:["",Validators.required]
  })
  }
  add(){
    if(this.payAddForm.valid){
      let payModel=Object.assign({},this.payAddForm.value)
      this.paymentService.add(payModel).subscribe(response=>{
        this.toastr.success(response.message,"Başarılı")
      },responseError=>{
       if(responseError.error.Errors.length>0){
         for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
        }
           
         }
        
        
      }) 
      
      
    }else{
      this.toastr.error("Formunuz eksik","Dikkat")
    }
     
    
  }


}

  
