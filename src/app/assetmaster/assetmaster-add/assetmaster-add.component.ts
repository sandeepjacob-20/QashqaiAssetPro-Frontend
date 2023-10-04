import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetmasterService } from 'src/app/shared/services/assetmaster.service';

@Component({
  selector: 'app-assetmaster-add',
  templateUrl: './assetmaster-add.component.html',
  styleUrls: ['./assetmaster-add.component.scss']
})
export class AssetmasterAddComponent implements OnInit {

  constructor(public assetmasterService: AssetmasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.assetmasterService.getAllAssetTypes();
    this.assetmasterService.getAllVendors();
    this.assetmasterService.getAllAssetDefinitions();
  }
  addAssetMaster(form?: NgForm) {
    console.log("Inserting............");
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
    this.router.navigateByUrl("aassetmaster/list")
  }

}
