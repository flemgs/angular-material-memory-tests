import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMenuComponent {


  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  openMenu($event: any) {
    // prevent click event
    $event.preventDefault();
    this.trigger.openMenu();
  }

  onItemSelected() {
    this.trigger.closeMenu();
  }

}
