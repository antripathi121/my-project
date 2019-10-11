import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent  {

  // title = 'ngSlick';


  
  cards=[
    {n:'card1'},{n:'card2'},{n:'card3'},{n:'card4'},{n:'card5'},{n:'card6'},{n:'card7'}
  ];

  slideConfig2 = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    // "dots": true,
    "infinite": true,
    // "autoplay": true,
    // 'autoplaySpeed': 1500,
    'pauseOnHover': false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        // centerMode:true,
        // vertical:true
        }
        },
        {
        breakpoint: 450,
        settings: {
        slidesToShow: 1,
        // centerMode:true,
        // // vertical:true

        }
        }
     
      ]
   
};

 
}
