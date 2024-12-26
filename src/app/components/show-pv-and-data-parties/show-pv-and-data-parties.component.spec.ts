import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPvAndDataPartiesComponent } from './show-pv-and-data-parties.component';

describe('ShowPvAndDataPartiesComponent', () => {
  let component: ShowPvAndDataPartiesComponent;
  let fixture: ComponentFixture<ShowPvAndDataPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPvAndDataPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPvAndDataPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
