import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeStudentComponent } from './mange-student.component';

describe('MangeStudentComponent', () => {
  let component: MangeStudentComponent;
  let fixture: ComponentFixture<MangeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
