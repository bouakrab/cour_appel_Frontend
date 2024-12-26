import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataPartieComponent } from './update-data-partie.component';

describe('UpdateDataPartieComponent', () => {
  let component: UpdateDataPartieComponent;
  let fixture: ComponentFixture<UpdateDataPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDataPartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
