import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvOrdersComponent } from './prov-orders.component';

describe('ProvOrdersComponent', () => {
  let component: ProvOrdersComponent;
  let fixture: ComponentFixture<ProvOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
