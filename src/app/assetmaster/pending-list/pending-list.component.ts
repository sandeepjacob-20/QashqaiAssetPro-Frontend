import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assetmaster } from 'src/app/shared/model/assetmaster';
import { Purchase } from 'src/app/shared/model/purchase';
import { AssetmasterService } from 'src/app/shared/services/assetmaster.service';
import { PurchaseService } from 'src/app/shared/services/purchase.service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent implements OnInit {

  constructor(public purchaseService: PurchaseService, 
    public assetmasterService: AssetmasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.purchaseService.getSomeOrders();
  }

  populateAssetMasterData(purchase: Purchase) {
    sessionStorage.setItem('assetId', purchase.assetId.toString());
    sessionStorage.setItem('vendorId', purchase.vendorId.toString());
    sessionStorage.setItem('adId', purchase.adId.toString());
  }

  addAssetMaster(purchase: Purchase) {
    console.log();
    purchase.statusId=5;
    this.populateAssetMasterData(purchase);
    this.router.navigate(['/assetmaster/add'])
  }
}
