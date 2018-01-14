import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    $(".slide-container").slick({
      autoplay : false,
      dots: false,
      speed : 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
      infinite: true,
      autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false
    });
  }

  ngAfterViewInit() {

  }

}
