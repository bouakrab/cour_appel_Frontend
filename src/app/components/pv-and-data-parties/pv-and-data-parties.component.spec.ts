import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvAndDataPartiesComponent } from './pv-and-data-parties.component';

describe('PvAndDataPartiesComponent', () => {
  let component: PvAndDataPartiesComponent;
  let fixture: ComponentFixture<PvAndDataPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvAndDataPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvAndDataPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
