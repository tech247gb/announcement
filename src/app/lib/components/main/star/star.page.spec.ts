import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StarPage } from './star.page';

describe('StarPage', () => {
  let component: StarPage;
  let fixture: ComponentFixture<StarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarPage, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
