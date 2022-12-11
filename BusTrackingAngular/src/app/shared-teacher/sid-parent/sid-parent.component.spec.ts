import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidParentComponent } from './sid-parent.component';

describe('SidParentComponent', () => {
  let component: SidParentComponent;
  let fixture: ComponentFixture<SidParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
