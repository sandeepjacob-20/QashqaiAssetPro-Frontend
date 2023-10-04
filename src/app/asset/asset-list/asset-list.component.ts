import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetDefinition } from 'src/app/shared/model/assetdefinition';
import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  //declare variable
  searchTerm='';
  page:number=1;
  pageSize=5;

  constructor(public assetService:AssetService,private router:Router) { }

  ngOnInit(): void {
    
    console.log("Hi, i'm in asset-list component")
    this.assetService.getAllAsset();
    
    this.assetService.getAllAssetClass();
    this.assetService.getAllAssetType();
  }

  //updating asset
  updateAsset(assetdefinition:AssetDefinition){
    console.log(assetdefinition);
    this.populateAssetData(assetdefinition);
    this.router.navigate(['asset/edit',assetdefinition.adId])
  }

   //getting asset data
   populateAssetData(assetdefinition:AssetDefinition){
    this.assetService.formAssetData=Object.assign({},assetdefinition)//converting employee(only string) to object as formdata is object
  }

  //disable asset
  disableAsset(id:number){
    if(confirm('Are you sure you want to DELETE this record?')){
      this.assetService.disableAsset(id)
       .subscribe(
         (response)=>{
           console.log(response)
           this.assetService.getAllAsset();
         },
         (error)=>{
           console.log(error)    
         }
       )
    }
  }

}
