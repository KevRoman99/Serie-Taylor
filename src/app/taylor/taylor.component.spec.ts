import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorComponent } from './taylor.component';

describe('TaylorComponent', () => {
  let component: TaylorComponent;
  let fixture: ComponentFixture<TaylorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaylorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaylorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
