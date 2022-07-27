import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SeperateNumByCommaPipe } from './pipes/seperate-num-by-comma.pipe';

const DECLARATIONS = [
  SeperateNumByCommaPipe,
  FileuploadComponent,
  ProgressbarComponent,
  DialogDeleteComponent,
  ProgressComponent
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ReactiveFormsModule]
})

export class SharedModule { }
