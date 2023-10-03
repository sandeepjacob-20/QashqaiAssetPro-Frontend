import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{PurchaseService} from 'src/app/shared/services/purchase.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public purchaseService:PurchaseService, private router:Router) { }

  ngOnInit(): void {
    this.purchaseService.getAllVendors();
    
  }
  addOrder (form?: NgForm){
  console.log("Inserting............");
  this.purchaseService.formOrderData.insertOrder(form.value).subscribe(
    (response)=>{
      console.log(response);
    },
    (error) =>{
      console.log(error)
    }

  )
  
}
//submot form
onSubmit(form : NgForm) {
  console.log(form.value);
//insert
this.addOrder(form);
form.resetForm();
this.router.navigateByUrl("purchase/list")
}
}


