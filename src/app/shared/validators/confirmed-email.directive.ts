import { group } from '@angular/animations';
import { ParseTreeResult } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[fbConfirmedEmail]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: ConfirmedEmailDirective, multi: true },
  ],
})
export class ConfirmedEmailDirective implements Validator {

  validate(group: FormGroup): ValidationErrors | null {
    if(group.value.email1 != group.value.email2) {
      return { ConfirmedEmailDirective: true};
    }
    return null
  }
}
