import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetmasterService } from 'src/app/shared/services/assetmaster.service';

@Component({
  selector: 'app-assetmaster-list',
  templateUrl: './assetmaster-list.component.html',
  styleUrls: ['./assetmaster-list.component.scss']
})
export class AssetmasterListComponent implements OnInit {
  // variable declaration
  SearchTerm: string;
  p: number;
  pageSize: number=5;
  constructor(public assetMasterService: AssetmasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.assetMasterService.getAssetMaster();
  }

  editAsset(assetmaster) {
    sessionStorage.setItem('assetId', assetmaster.assetId.toString());
    sessionStorage.setItem('vendorId', assetmaster.vendorId.toString());
    sessionStorage.setItem('adId', assetmaster.adId.toString());
    this.assetMasterService.formAssetMasterData = Object.assign({}, assetmaster);
    this.router.navigate(['/assetmaster/edit', assetmaster.amId])
  }

  disableAsset(_id: number) {
    if (confirm('Are you sure you want to DELETE this record?')) {
      this.assetMasterService.disableAssetMaster(_id)
        .subscribe(
          (response) => {
            console.log(response)
            this.assetMasterService.getAssetMaster();
          },
          (error) => {
            console.log(error)
          }
        )
    }
  }

}
