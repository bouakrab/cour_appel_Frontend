import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaintComponent } from './add-plaint.component';

describe('AddPlaintComponent', () => {
  let component: AddPlaintComponent;
  let fixture: ComponentFixture<AddPlaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
