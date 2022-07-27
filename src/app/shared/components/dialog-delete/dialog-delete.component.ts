import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription, of } from "rxjs";
import { delay, tap, catchError, finalize } from "rxjs/operators";
import Swal from "sweetalert2";
// import { editConfirmBox } from "../../message";
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});
@Component({
  selector: "app-dialog-delete",
  templateUrl: "./dialog-delete.component.html",
  styleUrls: ["./dialog-delete.component.scss"],
})
export class DialogDeleteComponent implements OnInit {
  @Input()
  id!: number;
  @Input()
  body!: string;
  @Input()
  title!: string;
  @Input()
  index!: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
    Swal.fire({
      title: "के तपाई साँच्चै हटाउन चाहनुहुन्छ?",
      text: "यसलाई उल्टाउन सकिने छैन!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  delete() {
    this.modal.close("success");
  }
  test() { }
}
