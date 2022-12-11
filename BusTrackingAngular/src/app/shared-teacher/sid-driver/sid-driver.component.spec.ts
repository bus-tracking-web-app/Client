import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidDriverComponent } from './sid-driver.component';

describe('SidDriverComponent', () => {
  let component: SidDriverComponent;
  let fixture: ComponentFixture<SidDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
