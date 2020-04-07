import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyStepperComponent {

  /**
   * Selected step index
   */
  selectedStepIndex = 0;

  next() {
    this.selectedStepIndex = (this.selectedStepIndex + 1) % 3;
  }

}
