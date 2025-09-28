import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualLogin } from './actual-login';

describe('ActualLogin', () => {
  let component: ActualLogin;
  let fixture: ComponentFixture<ActualLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
