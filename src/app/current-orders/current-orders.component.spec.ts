import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrdersComponent } from './current-orders.component';

describe('CurrentOrdersComponent', () => {
  let component: CurrentOrdersComponent;
  let fixture: ComponentFixture<CurrentOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentOrdersComponent]
    });
    fixture = TestBed.createComponent(CurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
