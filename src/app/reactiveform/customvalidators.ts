import { AbstractControl } from '@angular/forms';

export const CustomValidator = function (control: AbstractControl) {
  if (!control.value.startsWith('arun')) {
    return {valid: true};
  }
  return null;
};

