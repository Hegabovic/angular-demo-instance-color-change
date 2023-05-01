import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnChanges {
  @Input() selectedColor: string;
  backgroundColor: string;
  constructor() {
    this.selectedColor = '';
    this.backgroundColor = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedColor']) {
      this.backgroundColor = changes['selectedColor'].currentValue;
    }
  }
}
