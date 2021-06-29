import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdirconsoleComponent } from './logdirconsole.component';

describe('LogdirconsoleComponent', () => {
  let component: LogdirconsoleComponent;
  let fixture: ComponentFixture<LogdirconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogdirconsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdirconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
