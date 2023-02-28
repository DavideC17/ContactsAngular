import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationHelpersComponent } from './elevation-helpers.component';

describe('ElevationHelpersComponent', () => {
  let component: ElevationHelpersComponent;
  let fixture: ComponentFixture<ElevationHelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationHelpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevationHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
