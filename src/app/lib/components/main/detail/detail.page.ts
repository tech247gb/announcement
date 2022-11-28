import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnnouncementService } from '@lib/services/announcement/announcement.service';
import { AnnouncementUserPage } from '../announcementUser/announcementUser.page';
import { StarPage } from '../star/star.page';

@Component({
  standalone: true,
  imports: [CommonModule, AnnouncementUserPage, StarPage],
  selector: 'app-detail-page',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css'],
})
export class DetailPage {
  announcement: any;
  constructor(public listSevice: AnnouncementService) {}
  
  ngOnInit(): void {
    /** Get current announcement from service */
    this.listSevice.currentAnnouncement.subscribe((res: any) => {
      this.announcement = res;
    });
  }
}
