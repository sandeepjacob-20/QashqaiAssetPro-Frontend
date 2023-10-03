import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseUserEditComponent } from './purchase-user-edit.component';

describe('PurchaseUserEditComponent', () => {
  let component: PurchaseUserEditComponent;
  let fixture: ComponentFixture<PurchaseUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
