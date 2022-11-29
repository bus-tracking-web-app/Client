import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusComponent } from './createbus.component';

describe('CreatebusComponent', () => {
  let component: CreatebusComponent;
  let fixture: ComponentFixture<CreatebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
