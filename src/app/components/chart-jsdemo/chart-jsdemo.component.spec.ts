import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJSdemoComponent } from './chart-jsdemo.component';

describe('ChartJSdemoComponent', () => {
  let component: ChartJSdemoComponent;
  let fixture: ComponentFixture<ChartJSdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartJSdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJSdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
