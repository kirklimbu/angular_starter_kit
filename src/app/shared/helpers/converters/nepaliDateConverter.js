
// import { DateFormatter } from 'angular-nepali-datepicker';

export class NepaliDateConverter {
  getCurrentDateBS() {
    return NepaliFunctions.GetCurrentBsDate();
    
  }

  getBeforeAfterDateAD(days) {
    let date = new Date();
    return new Date(date.setMonth(date.getMonth() + days));
  }

  /* getBeforeAfterDateAD() {
    let date = new Date();
    return new Date(date.setMonth(date.getMonth() + 8));
  } */

  /* mg ko  */
  appendLeadingZeroes(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n;
  }

  getCurrentDateBS() {
    return this.getStringFromNepaliFunction(NepaliFunctions.GetCurrentBsDate());
  }

  getCurrentDateAD() {
    return this.getStringFromNepaliFunction(NepaliFunctions.GetCurrentAdDate());
  }

  getBeforeAfterMonthDateAD(month) {
    // add/subtract given month in current AD date
    let date = new Date();
    date = new Date(date.setMonth(date.getMonth() + month));
    return this.getStringFromDate(date);
  }

  getBeforeAfterMonthDateBS(month) {
    // add/subtract given month in current BS date
    return this.adToBs(this.getBeforeAfterMonthDateAD(month));
  }

  getBeforeAfterDayDateAD(day) {
    // add/subtract given day in current AD date
    let date = new Date();
    date = new Date(date.setDate(date.getDate() + day));
    return this.getStringFromDate(date);
  }

  getBeforeAfterDayDateBs(day) {
    // add/subtract given day in current BS date
    return this.adToBs(this.getBeforeAfterDayDateAD(day));
  }

  adToBs(dateStringAd) {
    return this.getStringFromNepaliFunction(
      NepaliFunctions.AD2BS(this.getNepaliFunctionDateObject(dateStringAd))
    );
  }

  getStringFromDate(date) {
    //new Date() type to string
    return (
      date.getFullYear() +
      "/" +
      this.appendLeadingZeroes(date.getMonth() + 1) +
      "/" +
      this.appendLeadingZeroes(date.getDate())
    );
  }

  /* sajan maharjan ko */
  getStringFromNepaliFunction(nepaliFunctionObject) {
    //convert NepaliFunction return object to string
    return (
      nepaliFunctionObject.year +
      "/" +
      this.appendLeadingZeroes(nepaliFunctionObject.month) +
      "/" +
      this.appendLeadingZeroes(nepaliFunctionObject.day)
    );
  }

  getNepaliFunctionDateObject(dateString) {
    return NepaliFunctions.ConvertToDateObject(dateString, "YYYY/MM/DD");
  }

  getDatePickerObject(realDateString) {
    let nepaliFunctionObject = this.getNepaliFunctionDateObject(realDateString);
    nepaliFunctionObject.month = nepaliFunctionObject.month - 1;
    return this.getNepaliFunctionDateObject(
      this.getStringFromNepaliFunction(nepaliFunctionObject)
    );
  }

  /* to string aaunxa */
  getStringFromDatePicker(datePickerObject) {
    //convert DatePicker return object to string
    return (
      datePickerObject.year +
      "/" +
      this.appendLeadingZeroes(datePickerObject.month + 1) +
      "/" +
      this.appendLeadingZeroes(datePickerObject.day)
    );
  }


    getFormatedDateString(date) {
   if(date){
    const fromDateFormatter = (date) => `${date.year}/${date.month + 1}/${(date.day)}`

    let fromDate = fromDateFormatter(date)
    let splitedDate = fromDate.split('/')
    let month = splitedDate[1]
    let finalDate = splitedDate[0]
    if (+month < 10) {
      let m = this.appendLeadingZeroes(month)
      finalDate = `${finalDate}/${m}`
    } else {
      finalDate = `${finalDate}/${month}`
    }

    let day = splitedDate[2]
    if (+day < 10) {
      let d = this.appendLeadingZeroes(day)
      finalDate = `${finalDate}/${d}`
    } else {
      finalDate = `${finalDate}/${day}`
    }

    return finalDate
   }
  }

  /* mg ko  */
}
