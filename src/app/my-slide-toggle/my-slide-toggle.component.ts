import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-slide-toggle',
  templateUrl: './my-slide-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySlideToggleComponent {

  active = false;

  onTap(event: any) {
    event.preventDefault();
    this.active = !this.active;
  }

  onToggleTap(event: any) {
    event.preventDefault(); // prevents angular material change
  }

}
