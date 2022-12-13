import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTestiComponent } from './ctesti.component';

describe('CTestiComponent', () => {
  let component: CTestiComponent;
  let fixture: ComponentFixture<CTestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTestiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
