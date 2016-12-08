import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS } from "@angular/forms";

export function validateMention(c: AbstractControl) {
  let title = c.get('title').value.toLowerCase();
  let notes = c.get('notes').value.toLowerCase();
  if (notes.includes(title)) {
    return null;
  } else {
    return { 'nomention': true }
  }
}

@Directive({
  selector: '[demoValidateMention]',
  providers: [
    {provide: NG_VALIDATORS, useValue: validateMention, multi: true}
  ]
})
export class ValidateMentionDirective { }
