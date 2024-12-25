import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';

@Component({
  selector: 'app-legacy',
  standalone: true,
  imports: [MatLegacyButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegacyComponent {}
