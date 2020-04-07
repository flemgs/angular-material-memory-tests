import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-radio',
  templateUrl: './my-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyRadioComponent {

  active = false;

  onTap(event: any) {
    event.preventDefault();
    this.active = !this.active;
  }

  onToggleTap(event: any) {
    event.preventDefault(); // prevents angular material change
  }

}
