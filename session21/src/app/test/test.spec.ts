import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test } from './test';

describe('Test', () => {
  let component: Test;
  let fixture: ComponentFixture<Test>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
