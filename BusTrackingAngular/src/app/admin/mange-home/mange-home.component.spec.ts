import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeHomeComponent } from './mange-home.component';

describe('MangeHomeComponent', () => {
  let component: MangeHomeComponent;
  let fixture: ComponentFixture<MangeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
