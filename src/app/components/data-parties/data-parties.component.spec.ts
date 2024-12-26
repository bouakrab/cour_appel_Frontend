import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPartiesComponent } from './data-parties.component';

describe('DataPartiesComponent', () => {
  let component: DataPartiesComponent;
  let fixture: ComponentFixture<DataPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
