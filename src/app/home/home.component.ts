import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    $(".slide-container").slick({
      autoplay : false,
      dots: true,
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
