import {GestureConfig, HammerInstance} from '@angular/material';
import {noop} from 'rxjs';

/**
 * Tap options to override for Hammer.
 */
export const TAP_OVERRIDE_OPTIONS: RecognizerOptions = {time: 680, threshold: 75};

/**
 * Press options to override for Hammer.
 */
export const PRESS_OVERRIDE_OPTIONS: RecognizerOptions = {time: 700, threshold: 50};

/**
 * Pan options to override for Hammer.
 */
export const PAN_OVERRIDE_OPTIONS: RecognizerOptions = {threshold: 0};

const noopHammerInstance: HammerInstance = {
  on: noop,
  off: noop,
};

/**
 * Custom Hammer gesture configuration based on Material Library gesture configuration.
 */
export class UxCastHammerConfig extends GestureConfig {

  constructor() {
    // Allow default behaviour for vertical and horizontal scrolling.
    // When (pan) events are used anywhere in the application over an HTML element, we need to apply manually touchAction: 'none' to optimize pan performance.
    super({touchAction: 'pan-x pan-y'});
  }

  /**
   * Builds available hammer events for this HTML element. Called each time an hammer event is binded to an HTML element in HTML file.
   * @param element HTML element.
   */
  buildHammer(element: HTMLElement): HammerInstance {
    // Get hammer instance from window object
    const hammer: HammerStatic = typeof window !== 'undefined' ? (window as any).Hammer : null;

    if (!hammer) {
      // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
      // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
      // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
      // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
      // `this.events` to the set we support, instead of conditionally setting it to `[]` if
      // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
      // undefined).
      return noopHammerInstance;
    }

    /**
     * hack to force hammer to detect only TouchEvent.
     * To remove when DE29338 is fixed
     */
    hammer.defaults.inputClass = hammer.TouchInput;

    // Let material build its own hammer instance, mainly for material slider used in brightness-contrast
    // which need a custom slide event.
    const mc = super.buildHammer(element) as HammerManager;

    // Customize event for the whole application.
    const tap: Recognizer = mc.get('tap');
    const pan: Recognizer = mc.get('pan');
    const press: Recognizer = mc.get('press');

    pan.set(PAN_OVERRIDE_OPTIONS);
    press.set(PRESS_OVERRIDE_OPTIONS);
    tap.set(TAP_OVERRIDE_OPTIONS);
    tap.recognizeWith(press);
    tap.recognizeWith(pan);
    press.recognizeWith(pan);

    // Remove those default hammer recognizers since they are not needed in the application.
    mc.remove(mc.get('doubletap'));
    mc.remove(mc.get('pinch'));
    mc.remove(mc.get('swipe'));
    mc.remove(mc.get('rotate'));

    // remove custom longpress recognizer from angular material hammer config since there is no material components
    // that we are using that needs it (sort-header and tooltip).
    mc.remove(mc.get('longpress'));
    return mc as HammerInstance;
  }
}
