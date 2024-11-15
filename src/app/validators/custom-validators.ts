// src/app/validators/custom-validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  // Validator for Name: No spaces or numbers
  static noSpacesOrNumbers(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null; // If the control is empty, no error is returned.

      // Check if the name contains numbers or multiple spaces
      const invalidPattern = /[0-9\s]/;
      return invalidPattern.test(value)
        ? { noSpacesOrNumbers: 'Name should not contain spaces or numbers' }
        : null;
    };
  }

  // Validator for Date of Birth: No future dates, not less than 18 years old, not more than 140 years old
  static validDOB(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const dob = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();

      // Calculate actual age considering month and day differences
      const isUnderage = age < 18 || (age === 18 && monthDiff < 0) || (age === 18 && monthDiff === 0 && dayDiff < 0);
      const isOverage = age > 140 || (age === 140 && (monthDiff > 0 || (monthDiff === 0 && dayDiff > 0)));
      

      
     if (isUnderage) {
        return { underageDOB: 'You must be at least 18 years old' };
      } else if (isOverage) {
        return { overageDOB: 'Date of birth cannot be older than 140 years' };
      }

      return null;
    };
  }

  // Validator for Address: No numbers, no space after comma, no multiple spaces
  static validAddress(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      // Check for numbers, no space after commas, and no multiple spaces
      
      const commaSpacePattern = /,\s/;
      const multipleSpacesPattern = /\s{2,}/;

       if (commaSpacePattern.test(value)) {
        return { invalidCommaSpace: 'No space should be after a comma' };
      } else if (multipleSpacesPattern.test(value)) {
        return { multipleSpaces: 'No multiple spaces allowed' };
      }

      return null;
    };
  }
}
