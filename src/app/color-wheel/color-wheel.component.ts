import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-wheel',
  template: '<input type="color" (input)="onColorChange($event)">',
  styleUrls: ['./color-wheel.component.css']
})
export class ColorWheelComponent {
  @Output() colorChanged = new EventEmitter<string>();
  @Output() colorChange = new EventEmitter<string>();


  onColorChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const color = inputElement.value;
    this.colorChange.emit(color);
  }

}



