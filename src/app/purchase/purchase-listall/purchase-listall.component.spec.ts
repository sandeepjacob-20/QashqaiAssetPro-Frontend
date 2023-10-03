import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseListallComponent } from './purchase-listall.component';

describe('PurchaseListallComponent', () => {
  let component: PurchaseListallComponent;
  let fixture: ComponentFixture<PurchaseListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
