import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmasterAddComponent } from './assetmaster-add.component';

describe('AssetmasterAddComponent', () => {
  let component: AssetmasterAddComponent;
  let fixture: ComponentFixture<AssetmasterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmasterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
