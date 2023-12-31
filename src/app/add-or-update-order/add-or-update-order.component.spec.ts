import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateOrderComponent } from './add-or-update-order.component';

describe('AddOrUpdateOrderComponent', () => {
  let component: AddOrUpdateOrderComponent;
  let fixture: ComponentFixture<AddOrUpdateOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrUpdateOrderComponent]
    });
    fixture = TestBed.createComponent(AddOrUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
