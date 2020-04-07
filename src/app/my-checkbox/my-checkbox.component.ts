import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCheckboxComponent {

  active = false;

  onTap(event: any) {
    event.preventDefault();
    this.active = !this.active;
  }

  onToggleTap(event: any) {
    event.preventDefault(); // prevents angular material change
  }

}
