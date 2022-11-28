import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetailPage } from '@lib/components/main/detail/detail.page';
import { AnnouncementService } from '@lib/services/announcement/announcement.service';

@Component({
  standalone: true,
  imports: [CommonModule,DetailPage],
  selector: 'app-announcement-page',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.css'],
})
export class AnnouncementPage {
   /** Get single announcement from home */
  @Input() 
  data: any;
  announcementList:any;
  slideover: boolean | undefined;
  constructor(public announcementService:AnnouncementService) {
   
  }
  ngOnInit(): void {
    /** disable slide over view */
    this.slideover=false;
  }
  clickValue(item:any){
    /** enable slide over view */
    this.slideover=true;
    /** change current announcement */
    this.announcementService.changeItem(item);
  }
}
