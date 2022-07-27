import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { PagesRoutingModule } from '../pages/pages-routing.module';
import { HttpTokenInterceptorService } from './interceptors/http-token-interceptor.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

const DECLARATIONS = [
  AsideComponent,
  HeaderComponent,
  FooterComponent,
  TopbarComponent,
  NavbarComponent,
  MobileMenuComponent,
  HomeSliderComponent,
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
  ],
  exports: [...DECLARATIONS],
  // providers: []
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpTokenInterceptorService,
    //   multi: true,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      console.log('parent module', JSON.stringify(parentModule));

      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}


