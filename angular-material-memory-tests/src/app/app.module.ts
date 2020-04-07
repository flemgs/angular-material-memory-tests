import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatRippleModule, MatMenuTrigger, MatMenuModule, MatSlideToggleModule, MatCheckboxModule, MatRadioModule, MatButton, MatStepperModule, MatButtonModule, MatSliderModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs'
import { UxCastHammerConfig } from './hammer-config';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MySlideToggleComponent } from './my-slide-toggle/my-slide-toggle.component';
import { MyCheckboxComponent } from './my-checkbox/my-checkbox.component';
import { MyRadioComponent } from './my-radio/my-radio.component';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { MySliderComponent } from './my-slider/my-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    MyButtonComponent,
    MySlideToggleComponent,
    MyCheckboxComponent,
    MyRadioComponent,
    MyStepperComponent,
    MySliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatRippleModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatStepperModule,
    MatSliderModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: UxCastHammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
