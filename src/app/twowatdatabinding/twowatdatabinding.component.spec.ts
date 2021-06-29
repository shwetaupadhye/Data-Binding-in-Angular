import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowatdatabindingComponent } from './twowatdatabinding.component';

describe('TwowatdatabindingComponent', () => {
  let component: TwowatdatabindingComponent;
  let fixture: ComponentFixture<TwowatdatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowatdatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowatdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
