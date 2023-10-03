import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmasterListComponent } from './assetmaster-list.component';

describe('AssetmasterListComponent', () => {
  let component: AssetmasterListComponent;
  let fixture: ComponentFixture<AssetmasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
