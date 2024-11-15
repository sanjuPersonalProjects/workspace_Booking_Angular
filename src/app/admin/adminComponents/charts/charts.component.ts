import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  // Variable to hold the currently selected component
  selectedComponent: string = 'BookingsChart';

  // Method to handle toggle changes
  onToggleChange(selected: string) {
    this.selectedComponent = selected;
  }
}
