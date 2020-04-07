import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySliderComponent {

  value = 50;

  constructor() { }

  minus() {
    this.value--;
  }

  plus() {
    this.value++;
  }

}
