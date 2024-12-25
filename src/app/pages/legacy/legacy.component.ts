import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-legacy',
  standalone: true,
  imports: [
    MatLegacyButtonModule,
    MatDividerModule,
    MatIconModule,
    MatLegacyCheckboxModule,
    FormsModule,
    NgFor,
  ],
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegacyComponent {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
