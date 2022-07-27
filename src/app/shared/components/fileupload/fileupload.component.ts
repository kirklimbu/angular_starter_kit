
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-fileupload",
  templateUrl: "./fileupload.component.html",
  styleUrls: ["./fileupload.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileuploadComponent,
      multi: true,
    },
  ],
})
export class FileuploadComponent implements AfterViewInit {
  // @Input() _progress;
  // onChange: Function;
  // file: File | null = null;
  // progress: number;
  // infoMessage: any;
  // isUploading: boolean = false;
  // imageSrc: string | ArrayBuffer =
  //   "https://bulma.io/images/placeholders/480x480.png";
  // fileName: string = "No file selected";

  // @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
  //   const file = event && event.item(0);
  //   console.log('file', file);

  //   if (file) {
  //     this.onChange(file);
  //     this.fileName = file.name;
  //     this.file = file;

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.imageSrc = reader.result as string;
  //       this.changeDetector.detectChanges();
  //     }
  //   } else {
  //     console.log('no file',);
  //     this.writeValue()
  //   }

  // }
  // second example props
  public files: any[] = [];
  public file!: { documentName: any; fileSize: string; } | null;
  public progress2 = [];
  @Output() sendFileNames: any = new EventEmitter();
  @Input() public uploadedDocuments!: any[];
  @Input() public directoryName: any;
  @Input() public isNeedToSaveOutside: any;
  imageSrc: any;
  pdfSrc: any;
  showFile = false;
  @ViewChild("fileDropRef") fileDropRef!: ElementRef;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private readonly changeDetector: ChangeDetectorRef
  ) { }
  ngAfterViewInit() {
    // this.fileDropRef.nativeElement.value = 'Whale!';
  }

  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  onDeleteFile() {
    this.host.nativeElement.value = null || '';
    this.file = null;
    this.sendFileNames.emit(null);
    this.changeDetector.detectChanges();
  }

  displayFileDetails(file: any) {
    this.file = {
      documentName: file.name,
      fileSize: this.formatBytes(file.size),
    };
    this.changeDetector.detectChanges();
  }

  getProgress(fileName: any) {
    let progressData: any = this.progress2.find(
      (file: any) => file.savedName == fileName
    );
    if (progressData) {
      return progressData.progress;
    } else {
      return new Observable((resolve) => {
        resolve.complete();
      });
    }
  }

  prepareFilesList($event: any) {
    // const selectedFile = ($event.target as HTMLInputElement).files[0];
    const selectedFile = ($event.target as any).files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      this.displayFileDetails(selectedFile);
      this.sendFileNames.emit(selectedFile);
      this.changeDetector.detectChanges();
    };
    reader.readAsDataURL(selectedFile);
  }
  viewFile() {
    this.showFile = !this.showFile;
    let $img: any = document.querySelector("#fileDropRef");
    // let $img: any = document.querySelector("#fileDropRef");
    // console.log(this.fileDropRef.nativeElement.value);
    const file = $img.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileURL: any = URL.createObjectURL(file);
      window.open(fileURL);
    };
    reader.readAsDataURL(file);
    this.changeDetector.detectChanges();
  }

  formatBytes(bytes: number): string {
    const UNITS = ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const factor = 1024;
    let index = 0;

    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }

    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  ngOnInit() {
    this.files = this.uploadedDocuments ? this.uploadedDocuments : [];
  }
}
