import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmasterEditComponent } from './assetmaster-edit.component';

describe('AssetmasterEditComponent', () => {
  let component: AssetmasterEditComponent;
  let fixture: ComponentFixture<AssetmasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
