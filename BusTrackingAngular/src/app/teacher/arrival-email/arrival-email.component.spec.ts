import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalEmailComponent } from './arrival-email.component';

describe('ArrivalEmailComponent', () => {
  let component: ArrivalEmailComponent;
  let fixture: ComponentFixture<ArrivalEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
