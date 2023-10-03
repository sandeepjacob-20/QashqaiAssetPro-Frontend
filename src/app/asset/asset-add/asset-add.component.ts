import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 import { Router } from '@angular/router';
 import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-asset-add',
 templateUrl: './asset-add.component.html',
   styleUrls: ['./asset-add.component.scss']
 })
export class AssetAddComponent implements OnInit {

  constructor(public assetService:AssetService,private router:Router) { }

  ngOnInit(): void {
    this.assetService.getAllAssetType();
    this.assetService.getAllAssetClass();
  }
  //insert asset
  addAsset(form: NgForm) {
    console.log("inserting....");
    this.assetService.insertAsset(form.value)
      .subscribe(
        (Response) => {
          console.log(Response);
        },
        (error) => {
          console.log(error);
        }
      )
  }
//Submit form
onSubmit(form?:NgForm){
  console.log(form.value)
  //insert
  this.addAsset(form);
  form.resetForm();
  //routing 
  this.router.navigateByUrl("/asset/list");  
}
}
