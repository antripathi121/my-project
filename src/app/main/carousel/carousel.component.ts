import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides = [
    {text: 'h1 text..1', h3: 'h3 text 1', img: 'https://fanfight.com/static/wc-slider1.29549b20.png'},
    {text: 'h1 text..2', h3: 'h3 text 2', img: 'https://fanfight.com/static/match.f6c880ac.png'},
    {text: 'h1 text..3', h3: 'h3 text 3', img: 'https://fanfight.com/static/maruthi-slider.72844f84.png'},
    {text: 'h1 text..4', h3: 'h3 text 4', img: 'https://fanfight.com/static/offer.66c44ae4.png'},
   
  ];
  

  slideConfig1 = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    // "dots": true,
    "infinite": true,
    "autoplay": true,
    'autoplaySpeed': 1500,
    'pauseOnHover': false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //     slidesToShow: 1,
    //     centerMode:true,
    //     // vertical:true
    //     }
    //     },
    //     {
    //     breakpoint: 600,
    //     settings: {
    //     slidesToShow: 1,
    //     centerMode:true,
    //     // vertical:true

    //     }
    //     }
     
    //   ]
   
};


  ngOnInit() {
  }

}
