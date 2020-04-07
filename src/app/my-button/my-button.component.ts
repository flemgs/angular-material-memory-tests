import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyButtonComponent {

  titleClicked() {
  }

}
