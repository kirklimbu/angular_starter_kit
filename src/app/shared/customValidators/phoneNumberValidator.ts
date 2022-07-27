import { FormControl, AbstractControl } from "@angular/forms";

export class PhoneNumComponent {
  phoneNumber = new FormControl("", [
    (control: AbstractControl) => {
      // remove any input that isn't a digit
      const numDigits = control.value.replace(/[^\d]+/g, "").length;
      // only working with US numbers for now, don't need a country code
      if (numDigits === 10) {
        return null;
      }
      if (numDigits > 10) {
        return {
          tooLong: { numDigits },
        };
      } else {
        return {
          tooShort: { numDigits },
        };
      }
    },
  ]);
}
