import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appCheckTextInput]',
  providers: [{provide: NG_VALIDATORS, useExisting: CheckTextInputDirective, multi: true}]
})
export class CheckTextInputDirective implements Validator {

  @Input('appCheckTextInput') border: [number, number];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let value = Number(control.value);
    if (!isNumber(control.value)) return {'notANumber': true};
    else if (value <= this.border[0] || value >= this.border[1]) return {'outOfBounds': true};
    return null;
  }

}

function isNumber(value: string) {
  return ((value != null) &&
    (value !== '') &&
    !isNaN(Number(value)));
}
