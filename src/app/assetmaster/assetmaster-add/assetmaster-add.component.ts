import { Component, OnInit } from '@angular/core';
import { AssetmasterService } from 'src/app/shared/services/assetmaster.service';

@Component({
  selector: 'app-assetmaster-add',
  templateUrl: './assetmaster-add.component.html',
  styleUrls: ['./assetmaster-add.component.scss']
})
export class AssetmasterAddComponent implements OnInit {

  constructor(private assetmasterService: AssetmasterService) { }

  ngOnInit(): void {
    this.assetmasterService.getAllAssetTypes();
    this.assetmasterService.getAllVendors();
    this.assetmasterService.getAllAssetDefinitions();
  }

}
