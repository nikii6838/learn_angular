import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDataBindingComponent } from './practice-data-binding.component';

describe('PracticeDataBindingComponent', () => {
  let component: PracticeDataBindingComponent;
  let fixture: ComponentFixture<PracticeDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
