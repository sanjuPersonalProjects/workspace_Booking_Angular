import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room, Workspace } from '../models/booking.model'; // Assume you have a separate model file

@Component({
  selector: 'app-workspace-selection',
  templateUrl: './workspace-selection.component.html',
  styleUrls: ['./workspace-selection.component.css'],
})
export class WorkspaceSelectionComponent {
  @Input() room!: Room;
  @Output() workspaceSelected = new EventEmitter<Workspace>();

  toggleWorkspaceSelection(workspace: Workspace): void {
    if (!workspace.isTaken) {
      workspace.isSelected = !workspace.isSelected;
      this.workspaceSelected.emit(workspace);
    }
  }
}
