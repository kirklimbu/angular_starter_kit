import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PagesRoutingModule } from '../pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LayoutComponent


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,

    HttpClientModule,
    CoreModule
  ],
  providers: []
})
export class LayoutModule { }
