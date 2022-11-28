import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnnouncementUserPage } from './announcementUser.page';

describe('AnnouncementUserPage', () => {
  let component: AnnouncementUserPage;
  let fixture: ComponentFixture<AnnouncementUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementUserPage, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
