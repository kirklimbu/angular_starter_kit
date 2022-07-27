import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor() { }
  public signUpSectionMessage = {
    emailAlreadyPresent: "Email is already present",
    accountCreatedSuccess: "Account is created successfully!!",
    emailNotMatched: "You are not invited!!",
    alreadyRegistered: "User is already registered",
  };
  public deleteTitleMessage = {
    country: "Delete country",
  };

  public forms = {
    invalid: "Invalid form",
  };
  public files = {
    invalidFile: "Invalid file",
    emptyFile: "No file selected",
  };

  public search = {
    missing: "Search word missing.",
  };

  showErrorMessage(message: string, timer?: number) {
    Swal.fire({
      // title: 'माफ गर्नुहोस्!',
      html: `${message}`,
      icon: "error",
      showCancelButton: false,
      showConfirmButton: false,
      // confirmButtonText: 'Close',
      // confirmButtonColor: '#3085d6',
      timer: timer || 3000,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((res) => {
      console.log(res);
      throw res;
    });
  }
  showSuccessMessage(message: string) {
    Swal.fire({
      // title: 'माफ गर्नुहोस्!',
      text: `${message}`,
      icon: "success",
      confirmButtonText: "Close",
      timer: 2000,
    });
  }
  showInfoMessage(message: string): Promise<any> {
    return Swal.fire({
      // title: 'माफ गर्नुहोस्!',
      text: `${message}`,
      icon: "info",
      showConfirmButton: true,
      confirmButtonText: "Yes",
      showCancelButton: true,

      // timer: 2000,
    }).then((res) => {
      console.log("info msg ma", res);
      // throw res;
      return res;
    });
  }
  async showWarningMessage(message: string): Promise<any> {
    const res = await Swal.fire({
      // title: 'माफ गर्नुहोस्!',
      html: `${message}`,
      icon: "warning",
      confirmButtonText: "Yes",
      showCancelButton: true,
      showConfirmButton: true,
    })
    return res
  }
}
