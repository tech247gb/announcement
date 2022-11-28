import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-horizontal.component.html',
  styleUrls: ['./layout-horizontal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHorizontalComponent {}
