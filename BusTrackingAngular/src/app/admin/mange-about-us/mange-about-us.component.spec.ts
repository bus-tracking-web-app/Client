import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeAboutUsComponent } from './mange-about-us.component';

describe('MangeAboutUsComponent', () => {
  let component: MangeAboutUsComponent;
  let fixture: ComponentFixture<MangeAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
