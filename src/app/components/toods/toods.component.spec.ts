import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodsComponent } from './toods.component';

describe('ToodsComponent', () => {
  let component: ToodsComponent;
  let fixture: ComponentFixture<ToodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
