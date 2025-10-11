import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImage } from './user-image';

describe('UserImage', () => {
  let component: UserImage;
  let fixture: ComponentFixture<UserImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
