import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logdirconsole2Component } from './logdirconsole2.component';

describe('Logdirconsole2Component', () => {
  let component: Logdirconsole2Component;
  let fixture: ComponentFixture<Logdirconsole2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logdirconsole2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Logdirconsole2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
