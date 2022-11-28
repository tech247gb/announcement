import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnnouncementPage } from '@lib/components/main/announcement/announcement.page';
import { DetailPage } from '@lib/components/main/detail/detail.page';
import { AnnouncementUserPage } from '@lib/components/main/announcementUser/announcementUser.page';
import { StarPage } from '@lib/components/main/star/star.page';
import { AnnouncementService } from '@lib/services/announcement/announcement.service';
import { AppTheme, ThemeService } from '@lib/services/theme';
import { Subject } from 'rxjs';


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule,AnnouncementPage,AnnouncementUserPage,DetailPage,StarPage],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit, OnDestroy {
  currentTheme!: AppTheme | null;
  slideover:any;
  list:any;
  @Input() item = '';
  private _destroy$ = new Subject();

  constructor(private _themeService: ThemeService,public listService:AnnouncementService) {}

  ngOnInit(): void {
    this.slideover=false;
    this.list=this.listService.getList();
    this._themeService.setTheme('dark');
  }

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  handleThemeChange(theme: AppTheme): void {
    this._themeService.setTheme(theme);
  }
}
