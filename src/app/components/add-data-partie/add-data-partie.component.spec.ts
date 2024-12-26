import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataPartieComponent } from './add-data-partie.component';

describe('AddDataPartieComponent', () => {
  let component: AddDataPartieComponent;
  let fixture: ComponentFixture<AddDataPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataPartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
