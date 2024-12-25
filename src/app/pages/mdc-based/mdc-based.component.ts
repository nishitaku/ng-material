import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mdc-based',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mdc-based.component.html',
  styleUrls: ['./mdc-based.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdcBasedComponent {

}
