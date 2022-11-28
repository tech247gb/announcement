import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-star-page',
  templateUrl: './star.page.html',
  styleUrls: ['./star.page.css'],
})
export class StarPage {
  @Input()
  data: any; /** Get single announcement from home */

  constructor() {}
  ngOnInit(): void {
    this.data.star=false; 
  }
  clickStar(){
    this.data.star=true;
  }
}
