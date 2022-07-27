import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  slides = [
    { img: "https://dummyimage.com/350x150/423b42/fff" },
    { img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/4a2b7a/fff" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() { }
  //Slider settings
  // slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  ngOnInit(): void {
  }

}
