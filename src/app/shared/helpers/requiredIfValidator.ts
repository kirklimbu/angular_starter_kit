import { Validators } from "@angular/forms";

export function requiredIfValidator(predicate) {
    console.log('reqq', predicate);

    return (formControl => {
        console.log('form control1', formControl);

        if (!formControl.parent) {
            return null;
        }
        if (predicate()) {
            console.log('form control2', formControl);

            return Validators.required(formControl);
        }
        console.log('form control3', formControl);

        return null;
    })
}