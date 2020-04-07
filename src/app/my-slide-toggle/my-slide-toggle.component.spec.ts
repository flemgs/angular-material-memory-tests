import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySlideToggleComponent } from './my-slide-toggle.component';

describe('MySlideToggleComponent', () => {
  let component: MySlideToggleComponent;
  let fixture: ComponentFixture<MySlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
