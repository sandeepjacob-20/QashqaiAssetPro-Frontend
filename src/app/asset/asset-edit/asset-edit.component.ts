import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit  {

  constructor(public assetService:AssetService,private router:Router) { }

  ngOnInit(): void {
    this.assetService.getAllAsset();
    this.assetService.getAllAssetType();
    this.assetService.getAllAssetClass();
  }

  //updating or editing asset
  updateAsset(form?:NgForm){
    console.log("Editing...");
    this.assetService.insertAsset(form.value).subscribe(
      (response)=>{console.log(response);},
      (error)=>{
        console.log(error);
      }
    )
  }
//Submit form
onSubmit(form:NgForm){
  console.log(form.value)
  //insert
  this.updateAsset(form);
  //resetting form
  form.resetForm();
  this.router.navigateByUrl("/asset/list")
}
}

