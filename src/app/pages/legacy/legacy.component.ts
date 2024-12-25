import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegacyComponent {

}
