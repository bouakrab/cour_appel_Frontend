import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaintAndDataPartiesComponent } from './plaint-and-data-parties.component';

describe('PlaintAndDataPartiesComponent', () => {
  let component: PlaintAndDataPartiesComponent;
  let fixture: ComponentFixture<PlaintAndDataPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaintAndDataPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintAndDataPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
