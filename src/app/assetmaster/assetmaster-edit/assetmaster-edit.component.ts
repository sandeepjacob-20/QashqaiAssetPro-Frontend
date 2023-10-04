import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetmasterService } from 'src/app/shared/services/assetmaster.service';

@Component({
  selector: 'app-assetmaster-edit',
  templateUrl: './assetmaster-edit.component.html',
  styleUrls: ['./assetmaster-edit.component.scss']
})
export class AssetmasterEditComponent implements OnInit {

  constructor(public assetmasterService: AssetmasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.assetmasterService.getAllAssetTypes();
    this.assetmasterService.getAllVendors();
    this.assetmasterService.getAllAssetDefinitions();
  }
  addAssetMaster(form?: NgForm) {
    console.log("Inserting............");
    form.value.assetId = sessionStorage.getItem('assetId');
    form.value.vendorId = sessionStorage.getItem('vendorId');
    form.value.adId = sessionStorage.getItem('adId');
    sessionStorage.removeItem('assetId');
    sessionStorage.removeItem('vendorId');
    sessionStorage.removeItem('adId');
    this.assetmasterService.insertAssetMaster(form.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }

    )
  }
  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //insert
    this.addAssetMaster(form);
    form.resetForm();
    this.router.navigateByUrl("assetmaster/list")
  }

}
