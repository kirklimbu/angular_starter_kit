import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, retry, shareReplay } from "rxjs/operators";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "src/app/shared/services/message.service";
// import { AuthService } from "src/app/modules/auth";

@Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(
//     // private authenticationService: AuthService,
//     private spinner: NgxSpinnerService,
//     private errorDialogService: MessageService,

//     private zone: NgZone

//   ) { }
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       shareReplay(1),
//       retry(1),
//       catchError((error: HttpErrorResponse) => {
//         this.spinner.hide();
//         let errorMessage = "";

//         // client-side error
//         if (error.error instanceof ErrorEvent) {
//           errorMessage = ` ${error.error.message}`;
//           this.showErrorPopup({
//             icon: "error",
//             title: "Error...",
//             text: errorMessage,
//           });
//           return throwError(errorMessage) as Observable<any>;
//         }
//         // server-side error
//         if (!(error.error instanceof ErrorEvent)) {
//           errorMessage = `${error.error.message}`;
//           switch (error.status) {
//             case 400:
//               errorMessage = `${error?.error?.message}`;
//               let descriptionList = error.error.errors;
//               let description = "";
//               if (descriptionList && descriptionList.length) {
//                 descriptionList.forEach((_desc: any) => {
//                   description += `<span class='text-danger'>${_desc} </span>  <br>`;
//                 });
//               }

//               this.showErrorPopup({
//                 icon: "error",
//                 title: errorMessage,
//                 html: description,
//               });
//               break;
//             case 500:
//               // if (errorMessage == Error.NOT_AUTHORIZED) {
//               //   this.showErrorPopup({
//               //     icon: "error",
//               //     title: errorMessage,
//               //     text: `कृपया लगइन गर्नुहोस् ।`,
//               //   });
//               //   this.authenticationService.clearToken();
//               //   break;
//               // }

//               this.showErrorPopup({
//                 icon: "error",
//                 title: errorMessage,
//                 text: `Please contact your admin.`,
//               });
//               break;

//             default:
//               this.showErrorPopup({
//                 icon: "error",
//                 title: errorMessage,
//                 // text: errorMessage,
//               });
//           }
//         }
//       })
//     );

//     // unknown error backend down case
//     // if (!(error instanceof HttpErrorResponse)) {
//     //   this.showErrorPopup({
//     //     icon: "error",
//     //     title: "Error...",
//     //     text: Error.DEFAULT_ERROR_TITLE,
//     //     confirmButtonText: 'Close',
//     //   });
//     //   return throwError(errorMessage);
//     // }
//   }

//   private async showErrorPopup(option: SweetAlertOptions<any, any>) {
//     console.log("errror options", option);
//     // return of(  Swal.fire(option));
//     let test = []
//     test.push(option)
//     // if (option) {
//     return new Promise((resolve) => {
//       if (Swal.isVisible() == false) {
//         Swal.fire(option);
//         resolve(true);
//       } else {
//         let checkingI = setInterval(() => {
//           if (Swal.isVisible() == false) {
//             clearInterval(checkingI);
//             Swal.fire(option);
//             resolve(true);
//           }
//         }, 500);
//       }
//     });
//     // }
//   }
//   // errorMessage(title) {
//   //   Swal.fire({
//   //     position: "center",
//   //     type: "error",
//   //     title: title,
//   //     showConfirmButton: false,
//   //     timer: 1500,
//   //   });
//   // }
// }
export class ErrorInterceptor implements ErrorHandler {
  constructor(
    private errorDialogService: MessageService,
    private zone: NgZone
  ) { }

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    this.zone.run(() =>
      this.errorDialogService.showErrorMessage(
        error?.message || 'Undefined client error',
        error?.status
      )
    );

    console.error('Error from global error handler', error);
  }
}
