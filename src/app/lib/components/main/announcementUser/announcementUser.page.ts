import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'announcement-user-page',
  templateUrl: './announcementUser.page.html',
  styleUrls: ['./announcementUser.page.css'],
})
export class AnnouncementUserPage {
  @Input()
  data: any; /** Get single announcement from home */
  constructor() {}
  ngOnInit(): void {}
}
