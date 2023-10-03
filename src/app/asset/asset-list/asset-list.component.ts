import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  constructor(public assetService:AssetService,private router:Router) { }

  ngOnInit(): void {
    console.log("HIIIIIIIIIIII im in asset-list component")
    this.assetService.getAllAsset();
  }
  

}
