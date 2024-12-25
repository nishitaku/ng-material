import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mdc-based',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './mdc-based.component.html',
  styleUrls: ['./mdc-based.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdcBasedComponent {}
