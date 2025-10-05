import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDatePicker } from './test-date-picker';

describe('TestDatePicker', () => {
  let component: TestDatePicker;
  let fixture: ComponentFixture<TestDatePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDatePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDatePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
