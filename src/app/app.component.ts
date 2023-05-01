import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-color-wheel (colorChange)="onColorChange($event)"></app-color-wheel>
    <app-background [selectedColor]="selectedColor"></app-background>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  selectedColor: string;

  constructor() {
    this.selectedColor='';
  }
  onColorChange(color: string) {
    this.selectedColor = color;
  }
}

